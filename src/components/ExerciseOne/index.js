import { useState } from "react";
import { Container, Div, Label, Input, Button, Span } from "./styles";

import Header from "../Header";
import Card from "../Card";

const ExerciseOne = () => {
  const [kiloValue, setKiloValue] = useState();
  const [plateTare, setPlateTare] = useState();
  const [plateWeight, setPlateWeight] = useState();
  const [platePrice, setPlatePrice] = useState();

  function handlePlatePrice() {
    const price = (plateWeight - plateTare) * kiloValue;
    const priceFormated = price.toFixed(2);
    setPlatePrice(priceFormated);
  }

  return (
    <>
      <Header />
      <Container>
        <Card>
          <Div>
            <Label htmlFor="valueKg">Valor do quilo*</Label>
            <Input
              value={kiloValue}
              onChange={(e) => setKiloValue(e.target.value)}
              type="text"
              id="valueKg"
              placeholder="R$"
            />
          </Div>
          <Div>
            <Label htmlFor="tare">Tara do prato*</Label>
            <Input
              value={plateTare}
              onChange={(e) => setPlateTare(e.target.value)}
              type="number"
              id="tare"
              placeholder="Kg 0.000"
            />
          </Div>
          <Div>
            <Label htmlFor="plateWeight">Peso do prato*</Label>
            <Input
              value={plateWeight}
              onChange={(e) => setPlateWeight(e.target.value)}
              type="number"
              id="plateWeight"
              placeholder="Kg 0.000"
            />
          </Div>
          <Button onClick={handlePlatePrice}>Calcular Preço</Button>
          {platePrice && (
            <Span>
              O prato de {(plateWeight - plateTare).toFixed(3)} gramas custa: R$
              ${platePrice}
            </Span>
          )}
        </Card>
      </Container>
    </>
  );
};

export default ExerciseOne;
