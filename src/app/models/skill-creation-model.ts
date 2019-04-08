import { Skill } from "./skill";

export class SkillCrreationModel {
    skill: Skill;
    parentSkillId: string;
    needsSkills: Array<string>;
    recommendsSkills: Array<string>;
    fulfillsSkills: Array<string>;
}