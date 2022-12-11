import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ConfirmModal from "./ConfirmModal";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const TableAlunos = ({ alunos, setAlunos }) => {
    const [alunoExcluir, setAlunoExcluir] = useState(null);
    const [modal, setModal] = useState(undefined);

    function confirmarExclusao(aluno) {
        setAlunoExcluir(aluno);
        const confirmModal = new bootstrap.Modal("#confirmModal", {});
        setModal(confirmModal);
        confirmModal.show();
    }

    function excluirAluno() {
        axios.delete(`http://localhost:8080/api/alunos/${alunoExcluir._id}`)
                .then((data) => {
                    const alunosAtualizados = alunos.filter((aluno) => aluno._id !== alunoExcluir._id);
                    setAlunos(alunosAtualizados);
                    modal.hide();
                })
                .catch((error) => {
                    console.log(error);
                    modal.hide();
                });
    }

    return alunos.length === 0 ? (
        <div className="alert alert-info">Nenhum aluno cadastrado</div>
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
                    {alunos.map((aluno) => (
                        <tr key={aluno._id}>
                            <td>{aluno.nome}</td>
                            <td>{aluno.dataNascimento}</td>
                            <td>{aluno.email}</td>
                            <td>{aluno.sexo === "M" ? "Masculino" : "Feminino"}</td>
                            <td>{aluno.ativo ? "Ativo" : "Inativo"}</td>
                            <td>
                                <Link className="btn btn-sm btn-warning me-1" to={`/alunos/alterar/${aluno._id}`}>
                                    <i className="bi bi-pen"></i>
                                </Link>
                                <button className="btn btn-sm btn-danger" onClick={() => confirmarExclusao(aluno)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ConfirmModal question={`Deseja realmente excluir o aluno ${alunoExcluir?.nome}?`} action={excluirAluno} />
        </>
    );
};

export default TableAlunos;