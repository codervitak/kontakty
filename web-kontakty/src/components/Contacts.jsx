import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function Contacts() {
  const listOfCards = [];
  for (let i = 0; i < contacts.length; i++) {
    listOfCards.push(
      <div>
        <Card
          name={contacts[i].name}
          img={contacts[i].img}
          email={contacts[i].email}
          tel={contacts[i].tel}
        />
      </div>
    );
  }
  return (
    <div>
      <h1>Kontakty</h1>
      {listOfCards}
    </div>
  );
}

export default Contacts;
