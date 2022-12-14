import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/FormInput";
import FormCheckbox from "../components/FormCheckbox";
import { login } from "../services/authServices";

const Login = () => {
    const [inputs, setInputs] = useState({ email: "", senha: "", lembrar: false });
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validator = yup.object().shape({
        email: yup.string().email("E-mail inválido.").required("E-mail é obrigatório."),
        senha: yup.string().min(6, "Senha deve ter pelo menos 6 caracteres.").max(12, "Senha deve ter no máximo 12 caracteres.").required("Senha é obrigatória."),
        lembrar: yup.boolean().required('A caixa "Lembrar de mim" deve ser informada.'),
    });

    function handleChange(event) {
        //rawValue é o valor sem máscara e value é o valor com máscara
        if (event.target.type === "checkbox") {
            const value = event.target.checked;
            const name = event.target.name;
            setInputs({ ...inputs, [name]: value });
        } else {
            const value = event.target.rawValue ? event.target.rawValue : event.target.value;
            const name = event.target.name;
            setInputs({ ...inputs, [name]: value });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        validator
            .validate(inputs, { abortEarly: false })
            .then(async () => {
                setErrors({});
                if (await login(inputs.email, inputs.senha, inputs.lembrar)) {
                    navigate("/alunos");
                } else {
                    setErrors({ email: "Usuário ou senha inválidos." });
                }
            })
            .catch((error) => {
                setErrors({});
                error.inner.forEach((err) => {
                    setErrors((prevErrors) => ({ ...prevErrors, [err.path]: err.message }));
                });
            });
    }

    return (
        <>
            <div className="container my-5" style={{ minWidth: "480px" }}>
                <div className="col-6 col-md-4 col-xl-3 mx-auto">
                    <p className="text-center" style={{ fontSize: "150px" }}>
                        🏋
                    </p>
                    <h1 className="text-center display-3">Academia</h1>
                    <hr />
                    <div className="d-flex justify-content-center align-items-center">
                        <h2>Login</h2>
                    </div>

                    <form onSubmit={handleSubmit} noValidate autoComplete="off">
                        <div>
                            <FormInput type="email" field="email" placeholder="fulano@email.com" label="E-mail" onChange={handleChange} value={inputs?.email} error={errors?.email} />
                        </div>
                        <div>
                            <FormInput type="password" field="senha" placeholder="Senha" label="Senha" onChange={handleChange} value={inputs?.senha} error={errors?.senha} />
                        </div>
                        <div>
                            <FormCheckbox field="lembrar" label="Lembrar de mim" onChange={handleChange} value={inputs?.lembrar} />
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="btn btn-dark btn-lg w-100">
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
