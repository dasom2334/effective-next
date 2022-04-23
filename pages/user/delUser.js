import {useDispatch} from "react-redux"
import React, {useState} from "react";
import {userActions} from "../../redux/reducers/userReducer.ts"
import tableStyles from "../common/styles/table.module.css";
export default function DelUser() {

    const [delUser, setDelUser] = useState({password: ''});
    useEffect(() => {
        const loginUser = localStorage.getItem('loginUser')
        const user = JSON.parse(loginUser)
        setDelUser(user)
    }, [])

    const dispatch = useDispatch();
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setDelUser({userid:delUser.userid, password: value})
    }

    return (
        <form
            action=""
            onSubmit={e => {
                e.preventDefault()
                dispatch(userActions.delUserRequest(user))
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
                            <label htmlFor="">ID</label>
                        </td>
                        <td>
                            <input type="hidden" name="userid" value={delUser.userid}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="">PASSWD</label>
                        </td>
                        <td>
                            <input type="password" name="password"/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <input type="submit" value="로그인"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    );
}
