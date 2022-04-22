import axios from "axios";
import React, { useState } from "react";
import tableStyles from "../common/styles/table.module.css";
export default function BoardList() {
  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
          <th colSpan={3}>
            <h2>게시글목록</h2>
          </th>
        </tr>
        <tr>
          <th>#</th>
          <th>학교명</th>
          <th>학생 1인당 급식비</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colSpan={3}>
            <label htmlFor="">데이터없음</label>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
