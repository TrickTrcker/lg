import { AttributeItem } from "./attribute/attribute-item";
import { Reaction } from "./reaction";

export class Skill {
    uid: string;
    owner: string;
    addedBy: string;
    experience:	number;
    reward:	number;
    addedAt: Date;
    acquiredAt:	Date;
    status: number;
    difficulty:	number;
    isOneTime: boolean;
    aspect: number;
    title: string;
    description: string;
    iconUrl: string;
    attributes: string; //Array<AttributeItem> = new Array<AttributeItem>();
    type: number;
    reactions: Reaction = new Reaction();
    selfReactions: Reaction = new Reaction();
    marks: Array<string>;

    parentSkillId: string;
    isAcquired: boolean;
    isOptional: boolean;
}