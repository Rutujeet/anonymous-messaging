import { getSession } from "next-auth/react";
import { getLinks, addLink } from "../../lib/dummyData";
import { nanoid } from "nanoid";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.method === "GET") {
    const links = getLinks().filter((link) => link.userId === session.user.id);
    return res.status(200).json(links);
  }

  if (req.method === "POST") {
    const newLink = addLink(session.user.id, nanoid(10));
    return res.status(201).json(newLink);
  }

  res.status(405).json({ message: "Method not allowed" });
}
