import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="karta">
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name} />
      <p>
        E-mail: <a href={`"mailto:${props.email}"`}>{props.email}</a>
      </p>
      <p>Telefon: {props.tel}</p>
    </div>
  );
}

export default Card;
