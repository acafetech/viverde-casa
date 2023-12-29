// onde vão ser chamados os componentes que constituem a home
import Header from "../../components/Header";
import ContrateOpcoes from "../../components/HeroSection";
import ServiceTray from "../../components/ServiceTray";



function Home() {
  return (
    <>
      <Header />
      <ContrateOpcoes />
      <ServiceTray />
    </>
  );

}

export default Home;
