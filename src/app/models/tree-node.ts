import { Skill } from "./skill";

export class TreeNode {
    id: string;
    label: string;
    imgUrl: string;
    data: Skill;
    children: Array<TreeNode>;
    expanded: boolean = false;
    first: boolean;
    last: boolean;
    prevNode: TreeNode;
    nextNode: TreeNode;
}