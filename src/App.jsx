import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { publicRoute } from "./models/routes";
import { SendMsgFromWpp } from "./view/SendMsgFromWpp/SendMsgFromWpp";
import { windowSize } from "./utilities/windowSize.util";
import { GlobalStyle } from "./styled-components/GlobalStyle.styled";
import { Animate } from "./styled-components/animation.styled";
import { FormSendMsg } from "view/SendMsgFromWpp/components/FormSendMsg/FormSendMsg";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <HashRouter>
      <GlobalStyle windowSize={windowSize()} />
      <Animate className="col-with-animate">
        <Routes>
          <Route element={<SendMsgFromWpp />}>
            <Route path={publicRoute.DAY} element={<FormSendMsg />} />
          </Route>
          <Route
            path="*"
            element={<Navigate to={publicRoute.SENDMESSAGE + "monday"} />}
          />
        </Routes>
      </Animate>
    </HashRouter>
  );
}

export default App;
