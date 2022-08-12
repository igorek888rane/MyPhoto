import {IPhotoCard, IUser} from "./types";

export interface HeaderAndDescriptionProps {
    photoCard:IPhotoCard |null ,
    data:IUser | null,
    user:IUser | null |undefined,
    back?:boolean,
    setBack?:any,
}