import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ClientForm from "./pages/Forms/ClientForm";
import WorkerForm from "./pages/Forms/WorkerForm";

function App () {
  return (
    <BrowserRouter>
        <Route component = { Home }  path="/" exact />
        <Route component = { ClientForm }  path="/ClientForm" />
        <Route component = { WorkerForm }  path="/WorkerForm" />
    </BrowserRouter>
  );
}

export default App;
