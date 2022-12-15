import FormInput from "../utils/FormInput";
//import CleaveInput from "../utils/CleaveInput";
import FormSelect from "../utils/FormSelect";

const FormFicha = ({ handleChange, inputs, errors, isNew }) => {
    return (
        <>
            <div className="row">
                <div className="col-6 col-md-3">
                    <FormInput type="date" field="dataInicio" placeholder="1900-01-01" label="Data de Inicio" onChange={handleChange} value={inputs?.dataInicio?.substring(0, 10)} error={errors?.dataInicio} />
                </div>

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

export default FormFicha;