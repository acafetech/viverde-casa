// onde vão ser chamados os componentes que constituem a home

import Button from "../../components/Button";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button link="/form" title="Form" type="client" />
    </>
  );
}

export default Home;
