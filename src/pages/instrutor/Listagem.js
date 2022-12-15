import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import TableInstrutors from "../../components/Instrutor/TableInstrutors";
import "./Listagem.css";

const Listagem = () => {
    const [Instrutor, setInstrutor] = useState([]);
    const [loading, setLoading] = useState(true);

    const carregarInstrutors = () => {
        axios
            .get("http://localhost:8080/api/Instrutors")
            .then((response) => {
                setInstrutor(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        carregarInstrutors();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Instrutors</h1>
                <Link to="/Instrutors/cadastrar" className="btn btn-primary">
                    Novo
                </Link>
            </div>
            <hr />
            {loading ? <Loading /> : <TableInstrutors Instrutors={Instrutor} setInstrutors={setInstrutor} />}
        </>
    );
};

export default Listagem;