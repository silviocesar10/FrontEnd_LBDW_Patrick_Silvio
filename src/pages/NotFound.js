import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <h1>Página não encontrada</h1>
            <p>
                <Link to="/">Voltar para a página inicial</Link>
            </p>
        </>
    );
};

export default NotFound;
