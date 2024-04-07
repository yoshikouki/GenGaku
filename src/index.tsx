import { Hono } from "hono";
import { renderer } from "./_renderer";

const app = new Hono();

app.get("*", renderer);

app.get("/", (c) => {
  return c.render(<h1>GenGaku!</h1>);
});

export default app;
