import {useDispatch} from "react-redux"
import React, {useEffect, useState} from "react";
import {userActions} from "../../redux/reducers/userReducer.ts"
import tableStyles from "../common/styles/table.module.css";
export default function DelUser() {

    const [delUser, setDelUser] = useState({password: ''});

    const dispatch = useDispatch();
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        console.log(value)
        setDelUser({
            ...delUser,
            [name]: value
        })
    }

    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                const loginUser = localStorage.getItem("loginUser");
                const user = JSON.parse(loginUser)
                setDelUser({
                    'userid': user.userid,
                    'password': delUser.password
                })
                console.log(user)
                console.log(delUser)
                console.log('aa')
                dispatch(userActions.delUserRequest(delUser))
            }
}>
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th colSpan={2}>
                            <h2>로그인</h2>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <label htmlFor="">PASSWD</label>
                        </td>
                        <td>
                            <input type="password" name="password" onChange={handleChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="submit" value="회원탈퇴"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}
