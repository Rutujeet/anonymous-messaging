let users = [
  { id: "1", username: "user1", password: "password1" },
  { id: "2", username: "user2", password: "password2" },
];

let links = [
  { id: "1", userId: "1", url: "abc123" },
  { id: "2", userId: "2", url: "def456" },
];

let messages = [
  {
    id: "1",
    linkId: "1",
    content: "Great job!",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    linkId: "2",
    content: "Need improvement",
    createdAt: new Date().toISOString(),
  },
];

export function getUsers() {
  return users;
}

export function getLinks() {
  return links;
}

export function getMessages() {
  return messages;
}

export function addLink(userId, url) {
  const newLink = { id: String(links.length + 1), userId, url };
  links.push(newLink);
  return newLink;
}

export function addMessage(linkId, content) {
  const newMessage = {
    id: String(messages.length + 1),
    linkId,
    content,
    createdAt: new Date().toISOString(),
  };
  messages.push(newMessage);
  return newMessage;
}
