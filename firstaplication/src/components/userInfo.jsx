import React from "react";

const UserInfo = (user, handleDelete) => {
  return (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((quality) => {
          let classes = "badge bg-";
          classes += quality.color;
          return (
            <span key={quality._id} className={classes}>
              {quality.name}
            </span>
          );
        })}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDelete(user._id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserInfo;
