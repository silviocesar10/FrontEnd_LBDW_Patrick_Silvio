import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import TableAlunos from "../../components/TableAlunos";
import "./Listagem.css";

const Listagem = () => {
    const [alunos, setAlunos] = useState([]);
    const [loading, setLoading] = useState(true);

    const carregarAlunos = () => {
        axios
            .get("http://localhost:8080/api/alunos")
            .then((response) => {
                setAlunos(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        carregarAlunos();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Alunos</h1>
                <Link to="/alunos/cadastrar" className="btn btn-primary">
                    Novo
                </Link>
            </div>
            <hr />
            {loading ? <Loading /> : <TableAlunos alunos={alunos} setAlunos={setAlunos} />}
        </>
    );
};

export default Listagem;