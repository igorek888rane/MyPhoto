import {RefObject} from "react";

export type BodyClick = MouseEvent & {
    path: Node[]
}

type closeClickType = {
    e:MouseEvent ,
    setOpen:(value:boolean)=>void
    popupRef:RefObject<HTMLDivElement>
}

type closeEspType = {
    e:KeyboardEvent,
    setOpen:(value:boolean)=>void
}

export const closeClick = ({e, setOpen, popupRef}:closeClickType) => {
    const _e = e as BodyClick
    if (popupRef?.current && !_e.path.includes(popupRef?.current)) {
        setOpen(false)
        document.body.onclick = null
    }
}

export const closeEsc = ({e, setOpen}:closeEspType)=>{
    if (e.code === 'Escape') {
        setOpen(false)
        document.onkeydown = null
    }
}