import { useState } from 'react'
import { FaGithub, FaInstagram, FaUserCircle } from "react-icons/fa";
function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-7xl font-bold text-white drop-shadow-lg">
            Welcome to Laravel + React
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            You don't need to deal with DOM manipulation anymore. <br></br>Thanks to this module, you can easily program UI AND UX, both frontend and backend professional applications. Thanks to this module! 🦾
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://laravel.com"
              target="_blank"
              className="bg-red-600 text-amber-50 font-semibold px-6 py-3 rounded-lg shadow hover:bg-rose-700 transition"
            >
              Laravel Docs
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              className="bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-600 transition"
            >
              React Docs
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-gray-300">
            <img
              src="https://avatars.githubusercontent.com/u/188672522?v=4&size=64"
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-white shadow"
            />

            <p className="text-md">
              Developer: <span className="font-semibold">Nebi Aytiş</span>
            </p>
          </div>
          {/* Social Media icons */}
          <div className="mt-10 flex justify-center gap-6 text-white text-2xl">
            <a href="https://github.com/AlfaDeveloperr/AlfaDeveloperr/blob/main/SoftWare.md" target="_blank" className="hover:text-gray-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/nebiaytis3356/" target="_blank" className="hover:text-pink-400 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home