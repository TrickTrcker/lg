import { BaseModel } from "../base-model";
import { User } from "./user";

export class UserResponse extends BaseModel {
    result: User;
}