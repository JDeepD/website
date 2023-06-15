import './globals.css'


export const metadata = {
  title: "JDeep's Website",
  description: "Random Description",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
