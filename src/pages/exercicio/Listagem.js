import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import TableTipoExercicio from "../../components/tipoexercicio/TableTipoExercicio";
import "./Listagem.css";

const Listagem = () => {
    const [tipoexercicios, setTipoExercicio] = useState([]);
    const [loading, setLoading] = useState(true);

    const carregarTipoExercicio = () => {
        axios
            .get("http://localhost:8080/api/tipoexercicio")
            .then((response) => {
                setTipoExercicio(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        carregarTipoExercicio();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Tipo de Exercício</h1>
                <Link to="/tipoexercicios/cadastrar" className="btn btn-primary">
                    Novo
                </Link>
            </div>
            <hr />
            {loading ? <Loading /> : <TableTipoExercicio tipoexercicios={tipoexercicios} setTipoExercicio={setTipoExercicio} />}
        </>
    );
};

export default Listagem;