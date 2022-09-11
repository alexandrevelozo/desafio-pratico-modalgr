import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  width: 40vw;

  @media (max-width: 980px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;

    width: 100vw;
  }
`;
