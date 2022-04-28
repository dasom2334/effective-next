import axios from "axios";
import { useEffect, useState } from "react";
import tableStyles from "../common/styles/table.module.css";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { userActions } from "../../redux/reducers/userReducer.ts";
import { getUsersApi } from "../../redux/api/userApi.ts";

export default function GetUsers() {
  const columns = [
    "사용자ID",
    "이름",
    "이메일",
    "전화번호",
    "생년월일",
    "주소",
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    const loginUser = localStorage.getItem("loginUser");
    const user = JSON.parse(loginUser)

    const axiosConfig = {
      headers: {
        Authorization: "Bearer " + user.token,
      }
    };
    
    axios
      .get("http://localhost:5000/user/getUsers", axiosConfig)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
          <th colSpan={6}>
            <h1>회원목록</h1>
          </th>
        </tr>
        <tr>
          {columns.map((column, index) => {
            return <th key={index}>{column}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.length == 0 ? (
          <tr>
            <td colSpan={6}>no DATA!</td>
          </tr>
        ) : (
          data.map((user) => {
            return (
              <tr key={user.userid}>
                <td>{user.userid}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.birth}</td>
                <td>{user.address}</td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
}
