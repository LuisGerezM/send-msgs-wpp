import { publicRoute } from "models/routes";
import { Nav } from "react-bootstrap";
import { NavLinkReactRouter } from "./styled-components/NavLinkBootstrap.styles";

const NavLinkBootstrap = ({ text, to = "monday" }) => {
  return (
    <Nav.Link as={NavLinkReactRouter} to={publicRoute.SENDMESSAGE + to}>
      {text}
    </Nav.Link>
  );
};

export default NavLinkBootstrap;
