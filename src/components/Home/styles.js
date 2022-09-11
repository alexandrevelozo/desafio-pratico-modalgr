import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80vh;

  div {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    h1 {
      font-family: "Montserrat Subrayada", sans-serif;
      font-size: 32px;
      font-weight: 600;

      color: #fefefe;

      margin-bottom: 12px;
    }

    p {
      color: #fefefe;
      font-size: 26px;
    }
  }

  @media (max-width: 560px) {
    div {
      width: 80vw;
    }
  }
`;
