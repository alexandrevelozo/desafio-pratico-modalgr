import Navigator from "../Navigator";
import { Container, Logo, Button } from "./styles";

import { ReactComponent as GithubLogo } from "../../assets/logo-github.svg";

export const Header = () => {
  return (
    <Container>
      <Logo>Exercícios</Logo>
      <Navigator />
      <Button
        href="https://github.com/alexandrevelozo/desafio-pratico-modalgr"
        target="_blank"
      >
        <GithubLogo />
      </Button>
    </Container>
  );
};

export default Header;
