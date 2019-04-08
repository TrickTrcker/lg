import { BaseModel } from "../base-model";
import { Attribute } from "./attribute";

export class AttributesResponse extends BaseModel {
    result: Array<Attribute>;
}