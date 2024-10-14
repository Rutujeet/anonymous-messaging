import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [links, setLinks] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated") {
      fetchLinks();
      fetchMessages();
    }
  }, [status]);

  const fetchLinks = async () => {
    const res = await fetch("/api/links");
    const data = await res.json();
    setLinks(data);
  };

  const fetchMessages = async () => {
    const res = await fetch("/api/messages");
    const data = await res.json();
    setMessages(data);
  };

  const createNewLink = async () => {
    const res = await fetch("/api/links", { method: "POST" });
    const newLink = await res.json();
    setLinks([...links, newLink]);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Links</h2>
          <button
            onClick={createNewLink}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mb-4"
          >
            Create New Link
          </button>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link._id} className="bg-gray-800 p-4 rounded-md">
                <Link
                  href={`/feedback/${link._id}`}
                  className="text-blue-400 hover:underline"
                >
                  {link.url}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Received Messages</h2>
          <ul className="space-y-2">
            {messages.map((message) => (
              <li key={message._id} className="bg-gray-800 p-4 rounded-md">
                <p>{message.content}</p>
                <p className="text-sm text-gray-400 mt-2">
                  Received: {new Date(message.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
