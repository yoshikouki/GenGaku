import { reactRenderer } from "@hono/react-renderer";

export const renderer = reactRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <link href="/static/style.css" rel="stylesheet" />
        <title>GenGaku</title>
      </head>
      <body>{children}</body>
    </html>
  );
});
