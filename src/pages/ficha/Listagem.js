import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import TableFicha from "../../components/aluno/TableFicha";
import "./Listagem.css";

const Listagem = () => {
    const [ficha, setFicha] = useState([]);
    const [loading, setLoading] = useState(true);

    const carregarFicha = () => {
        axios
            .get("http://localhost:8080/api/ficha")
            .then((response) => {
                setFicha(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        carregarFicha();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Ficha</h1>
                <Link to="/ficha/cadastrar" className="btn btn-primary">
                    Novo
                </Link>
            </div>
            <hr />
            {loading ? <Loading /> : <TableFicha ficha={ficha} setFicha={setFicha} />}
        </>
    );
};

export default Listagem;