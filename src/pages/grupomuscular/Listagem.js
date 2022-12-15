import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import TableGrupoMuscular from "../../components/aluno/TableGrupoMuscular";
import "./Listagem.css";

const Listagem = () => {
    const [grupomuscular, setGrupoMuscular] = useState([]);
    const [loading, setLoading] = useState(true);

    const carregarGrupoMuscular = () => {
        axios
            .get("http://localhost:8080/api/grupomuscular")
            .then((response) => {
                setGrupoMuscular(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        carregarGrupoMuscular();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>GrupoMuscular</h1>
                <Link to="/grupomuscular/cadastrar" className="btn btn-primary">
                    Novo
                </Link>
            </div>
            <hr />
            {loading ? <Loading /> : <TableGrupoMuscular grupomuscular={grupomuscular} setGrupoMuscular={setGrupoMuscular} />}
        </>
    );
};

export default Listagem;