import { serve } from "https://deno.land/std@0.89.0/http/server.ts";

const port = 8000;
const http_server = serve({
  port: port,
});

for await (const req of http_server) {
  req.respond({
    body: "Hello Deno World\n",
  });
}
