import BottomNavBar from "./codepens/bottomNavBar";
import Contactanos from "./pages/contactanos/contactanos";
import Landing from "./pages/landing/landing";
import Planes from "./pages/planes/planes";
import Servicios from "./pages/servicios/servicios";
import Proyectos from "./pages/proyectos/proyectos";

import "./app.css";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
      className="nunito-normal"
    >
      <BottomNavBar />
      <Landing />
      <Servicios />
      <Proyectos />
      <Planes />
      <Contactanos />
    </div>
  );
}

export default App;
