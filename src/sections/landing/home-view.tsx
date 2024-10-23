import Link from 'next/link'

export default function HomeView () {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8 flex items-center justify-center">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-purple-400">
          Gestiona Tus Tareas
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300">
          Una aplicación minimalista y elegante para organizar tus tareas diarias.
          Prioriza, gestiona y mantén el control de tus actividades con facilidad.
        </p>

        <Link href="/task" className="inline-block">
          <span className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-lg group">
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
            <span className="relative flex items-center">
              Comenzar
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </span>
          </span>
        </Link>
      </div>
    </div>
  )
}