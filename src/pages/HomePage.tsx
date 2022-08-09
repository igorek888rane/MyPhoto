import React, {FC, useEffect, useState} from 'react';
import axios from "../utils/axios";
import {IUser} from "../@types/types";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {authSelector} from "../redux/slices/authSlice";

const HomeP: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    const {data} = useSelector(authSelector)
    const getUsers = async () => {
        const {data} = await axios.get('user/users')
        setUsers(data)
    }
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className={'container'}>
            <div>{users.map(u => <Link style={{textDecoration: 'none', fontSize: '24px', color: '#FFFF'}} key={u._id}
                                       to={`/profile/${u.userName}`}>{u.userName},</Link>)}</div>
            <div>
                {data.subscriptions.map(u => <Link style={{textDecoration: 'none', fontSize: '24px', color: '#FFFF'}} key={u}
                                                   to={`/profile/${u}`}>{u},</Link>)}
            </div>
        </div>
    );
};

export default HomeP;