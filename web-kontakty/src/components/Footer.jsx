import React from "react";

function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <a href="mailto:vit.lisner@student.gyarab.cz">Vít Lisner</a>
      </p>
    </footer>
  );
}

export default Footer;
