export interface IPhotoCard {
    id: string | number,
    description: string,
    photoUrl: string,
    likes: number,
    comments:[],
}

export interface IUser {
    _id: string,
    email:string,
    userName:string,
    token:string
    userStatus:string,
    userAvatar:string,
    photoCards:IPhotoCard[]
}

export interface FormValues {
    email?: string;
    userName: string;
    password: string;
    confirmPassword?: string;
}