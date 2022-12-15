import { BrowserRouter, Routes, Route } from "react-router-dom";
import Leiaute from "./pages/Leiaute";
import Principal from "./pages/Principal";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Alunos from "./pages/alunos/Listagem";
//import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Cadastro from "./pages/alunos/Cadastro";
import Alteracao from "./pages/alunos/Alteracao";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Ativos from "./pages/alunos/Ativos";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Leiaute />}>
                        <Route index element={<Principal />} />
                        <Route path="alunos">
                            <Route index element={<Alunos />} />
                            <Route path="cadastrar" element={<Cadastro />} />
                            <Route path="alterar/:id" element={<Alteracao />} />
                        </Route>
                        <Route path="ativos" element={<Ativos />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;