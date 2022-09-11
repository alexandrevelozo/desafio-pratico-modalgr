import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #121214;
  height: 80px;

  padding: 0 36px 0 36px;
  border-bottom: 1px solid #29292e;
`;

export const Logo = styled.span`
  font-family: "Montserrat Subrayada", sans-serif;
  font-size: 32px;
  font-weight: 600;

  color: #fefefe;
`;

export const Button = styled.a`
  width: 40px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  border: 2px solid #fefefe;
  border-radius: 12px;

  cursor: pointer;

  transition: 0.4s;

  &:hover {
    border: 2px solid #0085b8;
  }
`;

export const IconGithub = styled(FaGithub)`
  width: 26px;
  height: 26px;

  flex-shrink: 0;
`;
