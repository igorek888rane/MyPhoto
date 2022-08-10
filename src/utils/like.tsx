import {updatePhoto} from "../redux/slices/photoCardsSlice";
import {deleteLike, updateLike} from "../redux/slices/authSlice";
import {IPhotoCard, IUser} from "../@types/types";
import {AppDispatch} from "../redux/store";

export const addLike = async (count: number, like: boolean, photoCard: IPhotoCard | null, dispatch: AppDispatch) => {
    const params = {likes: count}
    const id = String(photoCard?._id)
    dispatch(updatePhoto({id, params}))
    like
        ? dispatch(updateLike(id))
        : dispatch(deleteLike(id))
}


export const likeFinder = (data: IUser | null, photoCard: IPhotoCard | null): string | undefined => {
    return data?.likes.find(l => l === photoCard?._id)
}