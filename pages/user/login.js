
import {useDispatch} from "react-redux"
import React, {useState} from "react";
import {userActions} from "../../redux/reducers/userReducer.ts"
import tableStyles from "../common/styles/table.module.css";
export default function Login() {
  
  const [user, setUser] = useState({
    userid: '',
    password: '',
});
const dispatch = useDispatch();
const handleChange = e => {
    e.preventDefault()
    const {name, value} = e.target;
    setUser({
        ...user,
        [name]: value
    })
}

  return (
    <form action="" onSubmit={e => {
        e.preventDefault()
        alert(' 진행 1: 회원가입 클릭 ');
        dispatch(userActions.loginRequest(user))
        setUser({
            userid: '',
            password: '',
        })
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
              <input type="text" name="userid" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">PASSWD</label>
            </td>
            <td>
              <input type="password" name="password" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input type="submit" value="로그인" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
