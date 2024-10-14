# Anonymous Messaging App

A simple Next.js application for anonymous messaging with dummy user accounts.

## Features

- User authentication (login only, using dummy accounts)
- Create and manage anonymous feedback links
- View received messages in a dashboard
- Submit anonymous feedback through unique links
- Responsive design with dark mode

## Tech Stack

- Next.js
- React
- NextAuth.js
- Tailwind CSS

## Setup

1. Clone the repository and install dependencies:

   ```
   git clone https://github.com/yourusername/anonymous-messaging-app.git
   cd anonymous-messaging-app
   npm install
   ```

2. Create a `.env.local` file in the root directory:

   ```
   NEXTAUTH_SECRET=your_nextauth_secret_here
   NEXTAUTH_URL=http://localhost:3000
   ```

3. Run the development server:

   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Log in using dummy accounts:
  - Username: user1, Password: password1
  - Username: user2, Password: password2
- Create new anonymous feedback links from the dashboard
- Share the generated links to receive anonymous messages
- View received messages in the dashboard

## Testing

Test between two dummy accounts using different browsers or incognito mode.

## Note

Uses in-memory data structures. Data resets on server restart.
