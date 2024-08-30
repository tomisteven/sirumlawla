import "./App.css";
import Header from "./componentes/Header/Header";
import Portada from "./componentes/Portada/Portada.js";
import SeccionDupes from "./componentes/SeccionDupes/SeccionDupes.js";
import BtnWhatsApp from "./componentes/BtnWhatsApp/BtnWhatsApp.js";
import ImagenesExclusivas from "./componentes/ImagenesExclusivas/ImagenesExclusivas.js";
import Footer from "./componentes/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Portada />
      <SeccionDupes />
      <BtnWhatsApp />
      <ImagenesExclusivas />
      <Footer />
    </div>
  );
}

export default App;
