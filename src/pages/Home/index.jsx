// onde vão ser chamados os componentes que constituem a home
import Header from "../../components/Header";
import ContrateOpcoes from "../../components/HeroSection";
import ServiceTray from "../../components/ServiceTray";
import Footer from "../../components/Footer/index"
import QuemSomos from "../../components/AboutContainer/index";

function App() {

  return (
    <>
      <Header />
      <ContrateOpcoes />
      <ServiceTray />  
      <QuemSomos/>
      <Footer/>
    </>
  );

}

export default App;
