import axios from "axios";
import React, { useState } from "react";
import tableStyles from "../common/styles/table.module.css";
export default function Join() {
  const proxy = "http://localhost:5000";
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(proxy+'/api/user/signup', inputs)
    .then(res => {
        const user = res.data;
        console.log('data posted.');
    })
    .catch(err => alert(err));
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <table className={tableStyles.table}>
        <thead>
          <tr>
            <th colSpan={2}>
              <h2>회원가입</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label htmlFor="">아이디</label>
            </td>
            <td>
              <input type="text" name="userid" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">비밀번호</label>
            </td>
            <td>
              <input type="password" name="password" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">비밀번호 확인</label>
            </td>
            <td>
              <input type="password" name="password-confirm"/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">이름</label>
            </td>
            <td>
              <input type="text" name="name" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">전화번호</label>
            </td>
            <td>
              <input type="text" name="phone" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">생년월일</label>
            </td>
            <td>
              <input type="text" name="birth" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">주소</label>
            </td>
            <td>
              <input type="text" name="address" onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <input type="submit" value="회원가입" />
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
