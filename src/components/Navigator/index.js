import { Container } from "./styles";
import { NavLink } from "react-router-dom";

const Navigator = () => {
  return (
    <Container>
      <NavLink
        style={{
          textDecoration: "none",
          color: "#a8a8b3",
          fontWeight: "bold",
          fontSize: "16px",
        }}
        to="/"
      >
        HOME
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "#a8a8b3",
          fontWeight: "bold",
          fontSize: "16px",
        }}
        to="/exerciseOne"
      >
        EXERCÍCIO 1
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "#a8a8b3",
          fontWeight: "bold",
          fontSize: "16px",
        }}
        to="/exerciseTwo"
      >
        EXERCÍCIO 2
      </NavLink>
      <NavLink
        style={{
          textDecoration: "none",
          color: "#a8a8b3",
          fontWeight: "bold",
          transition: "0.2s",
        }}
        to="/exerciseThree"
      >
        EXERCÍCIO 3
      </NavLink>
    </Container>
  );
};

export default Navigator;
