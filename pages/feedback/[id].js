import { useState } from "react";
import { useRouter } from "next/router";

export default function Feedback() {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: message, linkId: id }),
    });

    if (response.ok) {
      setMessage("");
      alert("Feedback submitted successfully!");
    } else {
      alert("Error submitting feedback. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">
          Submit Anonymous Feedback
        </h2>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Your Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
