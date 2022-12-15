import axios from "axios";
import { useEffect, useState } from "react";
import { authHeader, getUser, isAuthenticated } from "../../services/authServices";

const Ativos = () => {
    const [dados, setDados] = useState([]);
    const [usuario, setUsuario] = useState({});

    const getDados = async () => {
        await axios
            .get("http://localhost:8080/api/alunos/ativos", { headers: authHeader() })
            .then((response) => {
                if (response.status === 200) {
                    setDados(response.data);
                } else if (response.status === 403) {
                    setDados([]);
                } else {
                    console.log("GET_ATIVOS_ERROR: " + response);
                }
            })
            .catch((error) => {
                //console.log(error);
            });
    };

    const getUsuario = async () => {
        if (isAuthenticated()) {
            setUsuario(getUser());
        }
    };

    useEffect(() => {
        getDados();
        getUsuario();
    }, []);

    return (
        <>
            {usuario.ativo ? (
                <>
                    <h1>Página Restrita a Alunos Ativos</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui veniam impedit quas quisquam. Architecto, numquam! Praesentium recusandae sapiente voluptas perspiciatis? Dolores provident perspiciatis fuga et alias atque pariatur incidunt dolorem.</p>
                    <ul>
                        {dados.map((item) => (
                            <li key={item._id}>{item.nome}</li>
                        ))}
                    </ul>
                </>
            ) : (
                <h1>Somente usuários ativos podem ver esta página.</h1>
            )}
        </>
    );
};

export default Ativos;
