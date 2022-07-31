export interface IPhotoCard {
    id: string | number,
    description: string,
    photoUrl: string,
    likes: number,
    comments:number,
}

export interface IUser {
    id: string,
    email:string,
    userName:string,
    token:string
    userStatus:string,
    userAvatar:string,
    photoCard:IPhotoCard[],
}