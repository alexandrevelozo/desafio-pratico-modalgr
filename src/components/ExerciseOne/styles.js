import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
export const Label = styled.label`
  font-size: 18px;
`;
export const Input = styled.input`
  width: 400px;
  height: 50px;

  margin-top: 8px;
  margin-bottom: 16px;

  padding: 0 16px;

  border: 1px solid #29292e;
  border-radius: 8px;

  background-color: #fff;

  color: #111;

  font-size: 16px;

  transition: 0.2s;

  &:hover {
    border: 1px solid #8694ec;
  }

  &:focus {
    border: 1px solid #8694ec;
  }

  &::placeholder {
    color: #a8a8b3;
  }

  & + input {
    margin-top: 16px;
  }
`;

export const Button = styled.button`
  width: 400px;
  height: 50px;

  margin-top: 8px;
  margin-bottom: 16px;

  padding: 0 16px;

  border: 1px solid #29292e;
  border-radius: 8px;

  background-color: #35e8b3;

  color: #121214;
  font-weight: 600;

  font-size: 16px;

  transition: 0.2s;

  &:hover {
    background-color: #2ed7a2;
  }

  &:focus {
    background-color: #4affc6;
  }

  cursor: pointer;
`;

export const Span = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-top: 12px;

  color: #fff;
`;
