import { Route, BrowserRouter } from "react-router-dom";
import WorkerForm from "./pages/Forms/WorkerForm";
import Home from "./pages/Home";

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Home }  path="/" exact />
            <Route component = { ClientForm }  path="/ClientForm" />
            <Route component = { WorkerForm }  path="/WorkerForm" />
        </BrowserRouter>
    )
}

export default Routes;