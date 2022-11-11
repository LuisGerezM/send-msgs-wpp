import { Collapse } from "react-bootstrap";
import { CardAlertMessageToSend } from "view/SendMsgFromWpp/styled-components/CardAlertMessageToSend.styled";

export const AlertMessageToSend = ({ openMsgToSend, msgToSend }) => {
  return (
    <Collapse className="mb-3" in={openMsgToSend} dimension="width">
      <div id="example-collapse-text">
        <CardAlertMessageToSend>{msgToSend}</CardAlertMessageToSend>
      </div>
    </Collapse>
  );
};
