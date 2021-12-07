import React from "react";

const ChoosePhrase = (number) => {
    if (number === 1)
      return (
        <span className="badge badge-large bg-primary">
          {number} человек тусанет с тобой сегодня
        </span>
      );
    else if (number > 4)
      return (
        <span className="badge badge-large bg-primary">
          {number} человек тусанут с тобой сегодня
        </span>
      );
    else if (number > 1 || (number < 5 && number !== 0))
      return (
        <span className="badge badge-large bg-primary ">
          {number} человека тусанут с тобой сегодня
        </span>
      );
    else
      return (
        <span className="badge badge-large bg-danger">
          Ни кто с тобой не тусанет
        </span>
      );
};

export default ChoosePhrase;
