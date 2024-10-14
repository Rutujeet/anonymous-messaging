import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Anonymous Messaging App
        </h1>
        <div className="space-x-4">
          <Link
            href="/login"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
