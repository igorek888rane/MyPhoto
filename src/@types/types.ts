export interface IPhotoCard {
    id: number | string,
    description: string,
    photoUrl: string,
    likes: number,
    comments:number,
}

export interface IUser {
    userName:string,
    userStatus:string,
    userAvatar:string,
    photoCard:IPhotoCard[],
}