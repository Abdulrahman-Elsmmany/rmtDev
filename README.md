# rmtDev

Find your remote developer job.
A React + Vite application for searching and bookmarking remote developer jobs.

## Features

- Search for remote developer jobs by technology or keyword
- Sort results by relevance or recency
- Paginate through job results
- View detailed job information
- Bookmark jobs for quick access
- Responsive design

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [@tanstack/react-query](https://tanstack.com/query/latest)
- [@radix-ui/react-icons](https://www.radix-ui.com/docs/primitives/components/icons)
- [react-hot-toast](https://react-hot-toast.com/)

## Getting Started

1. **Install dependencies:**

   ```sh
   npm install
   ```

2. **Run in development mode:**

   ```sh
   npm run dev
   ```

3. **Build for production:**

   ```sh
   npm run build
   ```

4. **Preview production build:**

   ```sh
   npm run preview
   ```

## Project Structure

- `src/components/` – UI components (App, JobList, Sidebar, etc.)
- `src/contexts/` – React context providers for state management
- `src/lib/` – Custom hooks, types, constants, and utilities
- `public/` – Static assets
- `index.html` – Main HTML file
- `index.css` – Global styles

## API

Jobs data is fetched from:
`https://bytegrad.com/course-assets/projects/rmtdev/api/data`

## License

Intended for learning or portfolio use.
© Abdulrahman-Elsmmany, 2025
