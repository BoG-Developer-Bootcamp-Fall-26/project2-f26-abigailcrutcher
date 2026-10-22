import { LINE_COLORS } from "../types";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between border-b border-gray-300 bg-white px-6 py-4">
        <span className="w-24"></span>
        <h1 className="text-3xl font-bold">MARTA</h1>
        <a href="/about" className="w-24 text-right text-gray-700 hover:underline">
          About
        </a>
      </header>

      <main className="mx-auto max-w-md p-6">
        <h2 className="mb-6 text-2xl font-bold">View Routes Schedule</h2>
        <ul className="divide-y divide-gray-300 rounded-lg border border-gray-300 bg-white">
          {LINE_COLORS.map((color) => (
            <li key={color}>
              <a href={`/lines/${color}`} className="block px-4 py-3 text-lg capitalize hover:bg-gray-200">
                {color} Line
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
