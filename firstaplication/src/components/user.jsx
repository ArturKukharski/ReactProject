import React from "react";
import BookMark from "./bookmark";
import Qualitie from "./qualitie";

const User = ({ user, ...rest }) => {
  return (
    <>
      <tr>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((quality) => (
            <Qualitie key={quality._id} {...quality} />
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td>
          <BookMark
            _id={user._id}
            status={user.bookmark}
            onToggleBookMark={rest.onToggleBookMark}
          />
        </td>
        <td>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => rest.onDelete(user._id)}
          >
            Удалить
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
