import { Item } from "./item";

export interface ItemWithMeta {
    item: Item,
    changeType: string;
}