import FormInput from "../utils/FormInput";
//import CleaveInput from "../utils/CleaveInput";
import FormSelect from "../utils/FormSelect";

const FormInstrutor = ({ handleChange, inputs, errors, isNew }) => {
    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6">
                    <FormInput type="text" field="nome" placeholder="Fulano de Tal" label="Nome" onChange={handleChange} value={inputs?.nome} error={errors?.nome} />
                </div>
                <div className="col-6 col-md-3">
                    <FormInput type="date" field="dataNascimento" placeholder="1900-01-01" label="Data de Nascimento" onChange={handleChange} value={inputs?.dataNascimento?.substring(0, 10)} error={errors?.dataNascimento} />
                </div>
                <div className="col-6 col-md-3">
                    <FormSelect
                        field="sexo"
                        label="Gênero"
                        placeholder="Selecione um gênero..."
                        onChange={handleChange}
                        value={inputs?.sexo}
                        error={errors?.sexo}
                        options={[
                            { label: "Masculino", value: "M" },
                            { label: "Feminino", value: "F" },
                            { label: "Outro", value: "O" },
                        ]}
                    />
                </div>
                <div className="col-6 col-md-6">
                    <FormInput type="email" field="email" placeholder="fulano@email.com" label="E-mail" onChange={handleChange} value={inputs?.email} error={errors?.email} />
                </div>
                {isNew && (
                    <>
                        <div className="col-6 col-md-4">
                            <FormInput type="password" field="senha" placeholder="Senha" label="Senha" onChange={handleChange} value={inputs?.senha} error={errors?.senha} />
                        </div>
                        <div className="col-6 col-md-4">
                            <FormInput type="password" field="confSenha" placeholder="Confirme sua senha" label="Confirmação de Senha" onChange={handleChange} value={inputs?.confSenha} error={errors?.confSenha} />
                        </div>
                    </>
                )}

                <div className="col-6 col-md-4">
                    <FormSelect
                        field="ativo"
                        label="Situação"
                        placeholder="Selecione uma situação..."
                        onChange={handleChange}
                        value={inputs?.ativo}
                        error={errors?.ativo}
                        options={[
                            { label: "Ativo", value: "true" },
                            { label: "Inativo", value: "false" },
                        ]}
                    />
                </div>
            </div>
        </>
    );
};

export default FormInstrutor;