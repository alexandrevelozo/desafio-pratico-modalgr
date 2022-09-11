import { createGlobalStyle } from "styled-components";
import background from "../assets/background-image.png";

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
 }

 *, input, textarea, button {
  text-decoration: none;
  list-style: none;
 }

 *, button, input {
  font-family: 'Nunito', 'Times New Roman', Times, serif;
 }


  html, body, #root {
    min-height: 100vh;
    background: linear-gradient(180deg,#121214,rgba(18,18,20,0)), url(${background}) no-repeat center center;
    background-size: cover;
  }

`;
