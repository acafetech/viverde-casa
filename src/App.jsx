import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ClientForm from "./pages/Forms/ClientForm";
import WorkerForm from "./pages/Forms/WorkerForm";
import CompanyForm from "./pages/Forms/CompanyForm";
import HeaderForm from "./components/HeaderForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" exact />
        <Route element={<ClientForm />} path="/contrate" />
        <Route element={<WorkerForm />} path="/trabalhe" />
        <Route element={<CompanyForm />} path="/parceria" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
