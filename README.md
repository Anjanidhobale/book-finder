📘 Book Finder

A simple and responsive Book Finder web application built using React, Vite, and Tailwind CSS.
The app allows users to search for books by title using the Open Library public API and view basic book details.

🚀 Live Demo

🔗 Live Application:
https://anjani-book-finder.netlify.app

🔗 GitHub Repository:
https://github.com/Anjanidhobale/book-finder

✨ Features

🔍 Search books by title

⌨️ Search using Enter key or button click

📚 Displays book title, author, and first publish year

⚠️ Handles:

Empty search input

Loading state

No results found

API errors

🎨 Clean and responsive UI using Tailwind CSS

⚡ Fast development with Vite

🌐 Deployed with Netlify (CI/CD via GitHub)

🛠️ Tech Stack

Frontend: React (with Hooks)

Build Tool: Vite

Styling: Tailwind CSS

API: Open Library Search API

Deployment: Netlify

Version Control: Git & GitHub

📂 Project Structure
book-finder/
│
├── public/
│   └── _redirects
│
├── src/
│   ├── components/
│   │   └── SearchBar.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

🔌 API Used

Open Library Search API

Example:

https://openlibrary.org/search.json?q=harry+potter


No authentication or API key required.

⚙️ Local Setup Instructions

Follow these steps to run the project locally:

1️⃣ Clone the repository
git clone https://github.com/Anjanidhobale/book-finder.git
cd book-finder

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev


The app will run at:

http://localhost:5173

📦 Build for Production
npm run build


The production-ready files will be generated in the dist/ folder.

🌐 Deployment

The project is deployed on Netlify with continuous deployment enabled via GitHub.
Every push to the main branch triggers an automatic redeploy.

🧠 Future Improvements (Optional)

Add pagination or infinite scroll

Add book cover images

Add filters (author, year)

Improve accessibility (ARIA labels)

Add unit tests

👤 Author

Anjani Dhobale
Frontend Developer (React)
