import FormInput from "../utils/FormInput";
import CleaveInput from "../utils/CleaveInput";
//import FormSelect from "../utils/FormSelect";

const FormExercicio = ({ handleChange, inputs, errors, isNew }) => {
    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6">
                    <FormInput type="text" field="nome" placeholder="Fulano de Tal" label="Nome" onChange={handleChange} value={inputs?.nome} error={errors?.nome} />
                </div>
                <div className="col-6 col-md-3">
                    <FormInput type="number" field="pesoMinimo" placeholder="00" label="Peso Minimo" onChange={handleChange} value={inputs?.pesoMinimo} error={errors?.pesoMinimo} />
                </div>
                <div className="col-6 col-md-3">
                    <FormInput type="number" field="pesoMaximo" placeholder="100" label="Peso Maximo" onChange={handleChange} value={inputs?.pesoMaximo} error={errors?.pesoMaximo} />
                </div>
                <div className="col-6 col-md-3">
                    <CleaveInput type="number" field="degrauPeso" placeholder="00" label="degrauPeso" onChange={handleChange} value={inputs?.degrauPeso} error={errors?.degrauPeso} />
                </div>
            </div>
        </>
    );
};

export default FormExercicio;