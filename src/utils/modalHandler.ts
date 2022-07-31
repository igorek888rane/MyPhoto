import {ModalState, setModal} from "../redux/slices/modalSlice";
import {AppDispatch} from "../redux/store";

export const modalHandler = ({active,body}:ModalState,dispatch:AppDispatch)=>{
    dispatch(setModal({active,body}))
}