// app/layout.js
import './globals.css'

export const metadata = {
  title: 'AutobotWa - Landing',
  description: 'Sample landing page built with Next.js and Tailwind',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
