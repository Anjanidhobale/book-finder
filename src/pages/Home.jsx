import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { fetchBooks } from "../services/api";

function Home() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setBooks([]);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const results = await fetchBooks(query);
      setBooks(results);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        📚 Book Finder
      </h1>

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
      />

      {loading && (
        <p className="mt-6 text-center">Loading...</p>
      )}

      {error && (
        <p className="mt-6 text-center text-red-500">
          {error}
        </p>
      )}

      {!loading && books.length === 0 && query && (
        <p className="mt-6 text-center text-gray-500">
          No results found.
        </p>
      )}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {books.slice(0, 10).map((book, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg">
              {book.title}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {book.author_name?.[0] || "Unknown Author"}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              First published: {book.first_publish_year || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
