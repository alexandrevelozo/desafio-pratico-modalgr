import {
  Container,
  Div,
  Label,
  Input,
  Button,
  ContainerBadge,
  DivBadge,
  LogoModal,
  ImageCollaborator,
} from "./styles";
import { useState } from "react";
import Header from "../Header";
import Card from "../Card";

import logoModal from "../../assets/logo-modal.png";
import imageBadge from "../../assets/image-badge.png";

const ExerciseThree = () => {
  const [nameCollaborator, setNameCollaborator] = useState("");
  const [nameArray, setNameArray] = useState([]);
  const [initialsArray, setInitialsArray] = useState([]);
  const [lastName, setLastName] = useState([]);

  function handleGenerateName() {
    // Todas letras ficam maiúsculas
    let name = nameCollaborator.toUpperCase();
    name = name.split(" ");

    // Remove os conectores dos nomes e espaços em branco
    let remove = ["DE", "DA", "DAS", "DO", "DOS", "E", ""];
    name = name.filter((item) => !remove.includes(item));
    setNameArray([...nameArray, name]);

    // Coloca o ultimo nome no começo
    name.unshift(name.splice(-1, 1)[0]);

    // Adiciona o primeiro elemento do array em um novo array
    let lastName = [];
    lastName.push(name[0]);

    // Remove o primeiro elemento do array
    name.shift(0);

    // Pega as inicias dos nomes do array
    let initials = name.map((item) => item[0]);

    // Adicionar virgula e pontos para separar
    lastName = lastName + ",";
    initials = initials.join(".");

    setInitialsArray(initials);
    setLastName(lastName);
  }

  const Badge = () => (
    <ContainerBadge>
      <DivBadge>
        <div>
          <LogoModal src={logoModal} />
          <span>
            {lastName} {initialsArray}
          </span>
        </div>
        <ImageCollaborator src={imageBadge} />
      </DivBadge>
    </ContainerBadge>
  );

  return (
    <>
      <Header />
      <Container>
        <Card>
          <Div>
            <Label>Nome completo do colaborador* </Label>
            <Input
              value={nameCollaborator}
              type="text"
              placeholder="Nome Completo"
              onChange={(e) => setNameCollaborator(e.target.value)}
            />
            <Button onClick={handleGenerateName}>Gerar nome do crachá</Button>
            {nameArray.length > 0 && <Badge />}
          </Div>
        </Card>
      </Container>
    </>
  );
};

export default ExerciseThree;
