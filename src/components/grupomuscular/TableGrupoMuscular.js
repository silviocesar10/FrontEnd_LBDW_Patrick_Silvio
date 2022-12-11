import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ConfirmModal from "../utils/ConfirmModal";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const TableGrupoMuscular = ({ grupo, setGrupo }) => {
    const [grupoExcluir, setGrupoExcluir] = useState(null);
    const [modal, setModal] = useState(undefined);

    function confirmarExclusao(grupo) {
        setGrupoExcluir(grupo);
        const confirmModal = new bootstrap.Modal("#confirmModal", {});
        setModal(confirmModal);
        confirmModal.show();
    }

    function excluirGrupoMuscular() {
        axios.delete(`http://localhost:8080/api/grupomuscular/${grupoExcluir._id}`)
            .then((data) => {
                const gruposAtualizados = grupo.filter((grupo) => grupo._id !== grupoExcluir._id);
                setGrupo(gruposAtualizados);
                modal.hide();
            })
            .catch((error) => {
                console.log(error);
                modal.hide();
            });
    }

    return grupo.length === 0 ? (
        <div className="alert alert-info">Nenhum grupo muscular cadastrado</div>
    ) : (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {grupo.map((grupo) => (
                        <tr key={grupo._id}>
                            <td>{grupo.nome}</td>
                            <td>
                                <Link className="btn btn-sm btn-warning me-1" to={`/gruposmuculares/alterar/${grupo._id}`}>
                                    <i className="bi bi-pen"></i>
                                </Link>
                                <button className="btn btn-sm btn-danger" onClick={() => confirmarExclusao(grupo)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ConfirmModal question={`Deseja realmente excluir o grupo muscular ${grupoExcluir?.nome}?`} action={excluirGrupoMuscular} />
        </>
    );
};

export default TableGrupoMuscular;