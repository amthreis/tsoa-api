// src/users/usersController.ts
import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
    Tags,
  } from "tsoa";
  import { User } from "./user.entity";
  import { UsersService, UserCreationParams } from "./user.service";
  
  @Route("user")
  @Tags("User")
  export class UsersController extends Controller {
    @Get("{userId}")
    public async getUser(
      @Path() userId: number,
      @Query() name?: string
    ): Promise<User> {
      return new UsersService().get(userId, name);
    }

    @SuccessResponse("200", "OK")
    @Get("all")
    public async getAll(
      @Query() name?: string) : Promise<{ works: boolean }> {
        this.setStatus(200)
        console.log(name)
        return new UsersService().getAll(1);
    }
  
    @SuccessResponse("201", "Created") // Custom success response
    @Post()
    public async createUser(
      @Body() requestBody: UserCreationParams
    ): Promise<void> {
      this.setStatus(201); // set return status 201
      new UsersService().create(requestBody);
      return;
    }
  }