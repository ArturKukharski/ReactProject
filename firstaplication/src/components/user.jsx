import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";
import UserInfo from "./userInfo";
import BtnDelete from "./deleteElement";
import ChoosePhrase from "./choosePhrase";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userID) => {
    setUsers(BtnDelete(users, userID));
  };

  const renderPhrase = (number) => {
    return ChoosePhrase(number);
  };

  const renderUsers = () => {
    return users.map((user) => UserInfo(user, handleDelete));
  };

  if (users.length !== 0)
    return (
      <>
        {renderPhrase(users.length)}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{renderUsers()}</tbody>
        </table>
      </>
    );
  else return renderPhrase(users.length);
};

export default Users;
