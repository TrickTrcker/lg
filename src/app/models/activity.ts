import { ActivityItem } from "./activity-item";

export class Activity {
    activityId: string;
    name: string;
    activityTypeId: number;
    imgUrl: string;
    activityItems: Array<ActivityItem>;
}