import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const user_id = request.header("user_id");
      console.log("request.headers=", request.headers);
      const users = this.listAllUsersUseCase.execute({ user_id });
      return response.status(201).send(users);
    } catch (e) {
      return response.status(400).send({ error: "Request failed" });
    }
  }
}

export { ListAllUsersController };
