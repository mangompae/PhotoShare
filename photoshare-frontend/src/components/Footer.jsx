import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-16 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <span className="text-lg font-semibold">📸 PhotoShare</span>
        <span className="text-sm mt-2 md:mt-0">&copy; {new Date().getFullYear()} Hecho con 💙 por Manuel Gómez y David Peña</span>
        <div className="flex gap-3 mt-2 md:mt-0">
          <a href="https://github.com/mangompae" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}