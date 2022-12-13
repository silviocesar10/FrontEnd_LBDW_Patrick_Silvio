import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ConfirmModal from "../utils/ConfirmModal";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const TableInstrutor = ({ instrutors, setInstrutor }) => {
    const [instrutorExcluir, setInstrutorExcluir] = useState(null);
    const [modal, setModal] = useState(undefined);

    function confirmarExclusao(instrutor) {
        setInstrutorExcluir(instrutor);
        const confirmModal = new bootstrap.Modal("#confirmModal", {});
        setModal(confirmModal);
        confirmModal.show();
    }

    function excluirInstrutor() {
        axios.delete(`http://localhost:8080/api/instrutors/${instrutorExcluir._id}`)
            .then((data) => {
                const instrutorsAtualizados = instrutors.filter((instrutor) => instrutor._id !== instrutorExcluir._id);
                setInstrutor(instrutorsAtualizados);
                modal.hide();
            })
            .catch((error) => {
                console.log(error);
                modal.hide();
            });
    }

    return instrutors.length === 0 ? (
        <div className="alert alert-info">Nenhum instrutor cadastrado</div>
    ) : (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data Nascimento</th>
                        <th>E-mail</th>
                        <th>Sexo</th>
                        <th>Situação</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {instrutors.map((instrutor) => (
                        <tr key={instrutor._id}>
                            <td>{instrutor.nome}</td>
                            <td>{instrutor.dataNascimento}</td>
                            <td>{instrutor.email}</td>
                            <td>{instrutor.sexo === "M" ? "Masculino" : "Feminino"}</td>
                            <td>{instrutor.ativo ? "Ativo" : "Inativo"}</td>
                            <td>
                                <Link className="btn btn-sm btn-warning me-1" to={`/instrutors/alterar/${instrutor._id}`}>
                                    <i className="bi bi-pen"></i>
                                </Link>
                                <button className="btn btn-sm btn-danger" onClick={() => confirmarExclusao(instrutor)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ConfirmModal question={`Deseja realmente excluir o instrutor ${instrutorExcluir?.nome}?`} action={excluirInstrutor} />
        </>
    );
};

export default TableInstrutor;