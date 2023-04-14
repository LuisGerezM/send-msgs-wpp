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
          <Route path="*" element={<Navigate to={publicRoute.SENDMESSAGE + "monday"} />} />
        </Routes>
      </Animate>
    </HashRouter>
  );
}

export default App;

/**
 ¡Hola a todos mis pacientes de Fernández Oro! Soy el Dr. Gerez Walter, su médico de confianza,  quiero compartirles una gran noticia: estoy *postulándome como concejal en nuestra ciudad*. Como médico, he aprendido la importancia de la *escucha activa* y la *empatía*, habilidades que estoy comprometido a llevar a la política. Quiero conocer sus *inquietudes, ideas y anhelos* para nuestra ciudad, porque unidos podemos hacer grandes cosas.

Estoy postulándome como concejal en la *LISTA 429, "Cambia Fernandez Oro", acompañando al Intendente Sr. Laje Marcelo y Presidente de Consejo Sra. Herrera Gabriela*. Si me conocen como su médico de confianza, saben que siempre he trabajado por *su bienestar* y ahora quiero seguir haciéndolo desde una nueva posición. Con mi visión fresca y comprometida, podemos lograr grandes cosas unidos para *construir* una ciudad más *próspera* y *segura* para todos.

Por eso, los invito a votar por *Cambia Fernández Oro, Lista 429*. Unidos podemos hacer la diferencia y lograr una ciudad en la que todos tengamos la oportunidad de crecer y prosperar. Recuerden, ustedes me proporcionaron su número de teléfono y ahora *los invito* a unirse a mi equipo. ¡*Unidos* podemos hacer que nuestra ciudad sea un lugar mejor para vivir!
 */
