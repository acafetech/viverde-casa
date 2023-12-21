// onde vão ser chamados os componentes que constituem a home
import Button from "../../components/Button";
import Header from "../../components/Header";
import ServiceTray from "../../components/ServiceTray";

function Home() {
  return (
    <>
        <Header />

      <h1>Home</h1>
      <Button link="/form" title="Form" type="client" />
    

    <ServiceTray />
    </>
  );

}

export default Home;
