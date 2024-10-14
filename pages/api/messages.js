import { getSession } from "next-auth/react";
import { getMessages, addMessage, getLinks } from "../../lib/dummydata";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.method === "GET") {
    const userLinks = getLinks().filter(
      (link) => link.userId === session.user.id
    );
    const userLinkIds = userLinks.map((link) => link.id);
    const messages = getMessages().filter((message) =>
      userLinkIds.includes(message.linkId)
    );
    return res.status(200).json(messages);
  }

  if (req.method === "POST") {
    const { content, linkId } = req.body;
    const newMessage = addMessage(linkId, content);
    return res.status(201).json(newMessage);
  }

  res.status(405).json({ message: "Method not allowed" });
}
