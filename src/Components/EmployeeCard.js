import React from "react";
import data from "../data";

function EmployeeCard(props) {
  return (
    <div class="main-content">
      <div class="user-card">
        <div class="indexCounter">{data[props.index].id}/ 25</div>
        <h2 class="employee">
          {data[props.index].name.first} {data[props.index].name.last}
        </h2>
        <p>
          <strong>From:</strong> {data[props.index].city}
        </p>
        <p>
          <strong>Job Title:</strong> {data[props.index].title}
        </p>
        <p>
          <strong>Employer:</strong> {data[props.index].employer}
        </p>
        <p>
          <strong>Favorite Movies:</strong>
        </p>
        <ol>
          <li>{data[props.index].favoriteMovies[0]}</li>
          <li>{data[props.index].favoriteMovies[1]}</li>
          <li>{data[props.index].favoriteMovies[2]}</li>
        </ol>
      </div>
      </div>
  );
}

export default EmployeeCard;
