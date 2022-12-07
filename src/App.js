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
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;