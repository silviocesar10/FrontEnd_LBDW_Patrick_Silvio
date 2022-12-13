import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ConfirmModal from "../utils/ConfirmModal";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const TableTipoExercicio = ({ tipoExercicios, setTipoExercicio }) => {
    const [tipoExercicioExcluir, setAlunoExcluir] = useState(null);
    const [modal, setModal] = useState(undefined);

    function confirmarExclusao(tipoExercicio) {
        setAlunoExcluir(tipoExercicio);
        const confirmModal = new bootstrap.Modal("#confirmModal", {});
        setModal(confirmModal);
        confirmModal.show();
    }

    function excluirAluno() {
        axios.delete(`http://localhost:8080/api/tipoExercicios/${tipoExercicioExcluir._id}`)
            .then((data) => {
                const tipoExerciciosAtualizados = tipoExercicios.filter((tipoExercicio) => tipoExercicio._id !== tipoExercicioExcluir._id);
                setTipoExercicio(tipoExerciciosAtualizados);
                modal.hide();
            })
            .catch((error) => {
                console.log(error);
                modal.hide();
            });
    }

    return tipoExercicios.length === 0 ? (
        <div className="alert alert-info">Nenhum tipoExercicio cadastrado</div>
    ) : (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Peso Minimo</th>
                        <th>Peso Maximo</th>
                        <th>Degrau Peso</th>
                    </tr>
                </thead>
                <tbody>
                    {tipoExercicios.map((tipoExercicio) => (
                        <tr key={tipoExercicio._id}>
                            <td>{tipoExercicio.nome}</td>
                            <td>{tipoExercicio.pesoMinimo}</td>
                            <td>{tipoExercicio.pesoMaximo}</td>
                            <td>{tipoExercicio.degrauPeso}</td>
                            <td>
                                <Link className="btn btn-sm btn-warning me-1" to={`/tipoExercicios/alterar/${tipoExercicio._id}`}>
                                    <i className="bi bi-pen"></i>
                                </Link>
                                <button className="btn btn-sm btn-danger" onClick={() => confirmarExclusao(tipoExercicio)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ConfirmModal question={`Deseja realmente excluir o tipoExercicio ${tipoExercicioExcluir?.nome}?`} action={excluirAluno} />
        </>
    );
};

export default TableTipoExercicio;