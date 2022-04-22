import axios from "axios";
import React, { useState } from "react";
import tableStyles from "../common/styles/table.module.css";
export default function Login() {
  const proxy = "http://localhost:5000";
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(proxy+'/api/user/login', inputs)
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
              <input type="text" name="username" onChange={handleChange} />
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
