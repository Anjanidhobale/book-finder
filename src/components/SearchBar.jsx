function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="flex gap-2">
      <input
  type="text"
  placeholder="Search books by title..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
  onKeyDown={(e) => e.key === "Enter" && onSearch()}
  className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
/>


      <button
        onClick={onSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
