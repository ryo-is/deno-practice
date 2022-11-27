import { RouterContext, Status } from "../deps.ts";
import { UserRepository } from "../models/user/userRepository.ts";

export const UserController = () => {
  const userRepository = new UserRepository();

  const index = (ctx: RouterContext<"/users">) => {
    ctx.response.status = Status.OK;
    ctx.response.type = "json";
    ctx.response.body = {
      status: Status.OK,
      data: userRepository.all(),
    };
  };

  const find = (ctx: RouterContext<"/users/:id">) => {
    ctx.response.type = "json";

    const user = userRepository.find(+ctx.params.id);
    if (!user) {
      ctx.response.status = Status.NotFound;
      ctx.response.body = {
        status: Status.NotFound,
      };
    } else {
      ctx.response.status = Status.OK;
      ctx.response.body = {
        status: Status.OK,
        data: user,
      };
    }
  };

  return {
    index,
    find,
  };
};
