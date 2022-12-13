import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ConfirmModal from "../utils/ConfirmModal";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const TableExercicio = ({ exercicios, setExercicios }) => {
    const [exercicioExcluir, setExercicioExcluir] = useState(null);
    const [modal, setModal] = useState(undefined);

    function confirmarExclusao(exercicio) {
        setExercicioExcluir(exercicio);
        const confirmModal = new bootstrap.Modal("#confirmModal", {});
        setModal(confirmModal);
        confirmModal.show();
    }

    function excluirExercicio() {
        axios.delete(`http://localhost:8080/api/exercicios/${exercicioExcluir._id}`)
            .then((data) => {
                const exerciciosAtualizados = exercicios.filter((exercicio) => exercicio._id !== exercicioExcluir._id);
                setExercicios(exerciciosAtualizados);
                modal.hide();
            })
            .catch((error) => {
                console.log(error);
                modal.hide();
            });
    }

    return exercicios.length === 0 ? (
        <div className="alert alert-info">Nenhum exercicio cadastrado</div>
    ) : (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Ordem</th>
                        <th>Peso</th>
                        <th>Repeticoes</th>
                        <th>Series</th>
                    </tr>
                </thead>
                <tbody>
                    {exercicios.map((exercicio) => (
                        <tr key={exercicio._id}>
                            <td>{exercicio.ordem}</td>
                            <td>{exercicio.peso}</td>
                            <td>{exercicio.repeticoes}</td>
                            <td>{exercicio.series}</td>
                            <td>
                                <Link className="btn btn-sm btn-warning me-1" to={`/exercicios/alterar/${exercicio._id}`}>
                                    <i className="bi bi-pen"></i>
                                </Link>
                                <button className="btn btn-sm btn-danger" onClick={() => confirmarExclusao(exercicio)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>

            <ConfirmModal question={`Deseja realmente excluir o exercicio ${exercicioExcluir?.nome}?`} action={excluirExercicio} />
        </>
    );
};

export default TableExercicio;