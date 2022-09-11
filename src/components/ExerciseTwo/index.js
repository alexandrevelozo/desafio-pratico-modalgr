import { useState } from "react";
import { Container, Div, Label, Input, Button } from "./styles";

import Header from "../Header";
import Card from "../Card";

const ExerciseTwo = () => {
  const [input, setInput] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [strings, setStrings] = useState([]);

  function handleSeparate() {
    const inputArray = input.split(",");
    // Filtrar os números
    const numbersArray = inputArray.filter((item) => !isNaN(item));
    const numbersArraySorted = numbersArray.sort((a, b) => a - b);

    // Filtrar as strings
    const stringsArray = inputArray.filter((item) => isNaN(item));
    setNumbers(numbersArraySorted);
    setStrings(stringsArray);
  }

  return (
    <>
      <Header />
      <Container>
        <Card>
          <Div>
            <Label htmlFor="input">Digite um texto* </Label>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              id="input"
              placeholder="Digite palavras e números separados por vírgula"
            />
          </Div>
          <Div>
            <Button onClick={handleSeparate}>Separar</Button>
          </Div>
          <Div>
            <p>Números: {numbers.join(",")}</p>
            <p>Strings: {strings.join(",")}</p>
          </Div>
        </Card>
      </Container>
    </>
  );
};

export default ExerciseTwo;
