import { Application } from "./deps.ts";
import { userRouter } from "./routers/user.ts";

const app = new Application();

app.use(userRouter.routes());

await app.listen({ port: 8080 });
