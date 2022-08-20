export interface IPhotoCard {
    user: string,
    _id: string | number,
    description: string,
    photoUrl: string,
    likes: number,
    comments: [],
    createdAt: string,
    updatedAt: string,
}

export interface IUser {
    _id: string,
    email: string,
    userName: string,
    token: string
    userStatus: string,
    userAvatar: string,
    photoCards: string[],
    likes: string[],
    subscriptions: string[],
    subscribers: string[],
}

export interface IComment {
    user: string,
    photo: string,
    comment: string,
}

export interface FormValues {
    email?: string;
    userName: string;
    password: string;
    confirmPassword?: string;
}

