import pages from "@hono/vite-cloudflare-pages";
import devServer from "@hono/vite-dev-server";
import { defineConfig } from "vite";

export default defineConfig({
  ssr: {
    external: ["react", "react-dom"],
  },
  plugins: [
    pages(),
    devServer({
      entry: "src/index.tsx",
    }),
  ],
});
