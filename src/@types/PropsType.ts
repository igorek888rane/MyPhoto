import {IPhotoCard, IUser} from "./types";

export interface HeaderAndCommentsProps {
    photoCard:IPhotoCard |null ,
    data:IUser | null,
    user:IUser | null |undefined,
    back?:boolean,
    setBack?:any,
}