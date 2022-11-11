import NavLinkBootstrap from "components/NavLinkBootstrap/NavLinkBootstrap";
import { Nav } from "react-bootstrap";
import { dayTabsSchema } from "./utilities/dayTabsSchema.util";

function DaysTabs() {
  return (
    <Nav className="col col-12" variant="tabs" defaultActiveKey="/home">
      {dayTabsSchema.map((day) => (
        <Nav.Item key={day.to}>
          <NavLinkBootstrap text={day.text} to={day.to} />
        </Nav.Item>
      ))}
    </Nav>
  );
}

export default DaysTabs;
