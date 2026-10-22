import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between border-b border-gray-300 bg-white px-6 py-4">
        <h1 className="text-2xl font-bold sm:text-3xl">About MARTA</h1>
        <Link to="/" className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700">
          Back to Home
        </Link>
      </header>

      <main className="mx-auto max-w-3xl p-6">
        <p className="mb-6 text-gray-700">
          The Metropolitan Atlanta Rapid Transit Authority (MARTA) runs the rail and bus system that
          serves Atlanta and its surrounding counties. Its four rail lines, Gold, Red, Green, and
          Blue, connect the airport, downtown, Midtown, and the northern and eastern suburbs, giving
          riders an alternative to driving through city traffic.
        </p>
        <img
          src="/marta-map.png"
          alt="Map of the MARTA rail system"
          className="w-full rounded-lg border border-gray-300 bg-white"
        />
      </main>
    </div>
  );
}
