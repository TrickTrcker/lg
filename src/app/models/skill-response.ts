import { Skill } from "./skill";
import { BaseModel } from "./base-model";

export class SkillsResponse extends BaseModel {
    result: Array<Skill>;
}

export class SkillResponse extends BaseModel {
    result: Skill;
}