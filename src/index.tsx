import { Hono } from "hono";
import { logger } from "hono/logger";
import { secureHeaders } from "hono/secure-headers";

import { renderer } from "./_renderer";

const app = new Hono();

app.use(secureHeaders());
app.use(logger());

app.get("*", renderer);

app.get("/", (c) => {
  return c.render(<h1>GenGaku!</h1>);
});

export default app;
