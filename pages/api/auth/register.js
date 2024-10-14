import { connectToDatabase } from "../../../lib/db";
import User from "../../../models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body;

  await connectToDatabase();

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "Username already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = new User({
    username,
    password: hashedPassword,
  });

  await user.save();

  res.status(201).json({ message: "User created successfully" });
}
