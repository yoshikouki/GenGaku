import { reactRenderer } from "@hono/react-renderer";

export const renderer = reactRenderer(
  ({ children }) => {
    return children;
  },
  {
    stream: true,
  },
);
