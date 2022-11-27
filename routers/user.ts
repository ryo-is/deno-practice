import { Router } from "../deps.ts";
import { UserController } from "../controllers/userController.ts";

const router = new Router();
const userController = UserController();

router
  .get("/users", userController.index)
  .get("/users/:id", userController.find);

export const userRouter = router;
