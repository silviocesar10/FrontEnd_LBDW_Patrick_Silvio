import FormInput from "../utils/FormInput";
//import CleaveInput from "../utils/CleaveInput";
//import FormSelect from "../utils/FormSelect";

const FormGrupoMuscular = ({ handleChange, inputs, errors, isNew }) => {
    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6">
                    <FormInput type="text" field="nome" placeholder="Fulano de Tal" label="Nome" onChange={handleChange} value={inputs?.nome} error={errors?.nome} />
                </div>
            </div>
        </>
    );
};

export default FormGrupoMuscular;