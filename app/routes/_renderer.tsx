import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'

export default jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#f6f5f0" />
        <meta
          name="description"
          content="Shwetam Modi is a business analyst translating complex business needs into clear product requirements across insurance, e-commerce, IoT, and cloud."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shwetam Modi | Business Analyst" />
        <meta
          property="og:description"
          content="12+ years of business analysis, product requirements, API integration, and enterprise delivery."
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
        <title>Shwetam Modi | Business Analyst</title>
      </head>
      <body>{children}</body>
    </html>
  )
})
