import FormInput from "../utils/FormInput";
//import CleaveInput from "../utils/CleaveInput";
//import FormSelect from "../utils/FormSelect";

const FormExercicio = ({ handleChange, inputs, errors, isNew }) => {
    return (
        <>
            <div className="row">
                <div className="col-12 col-md-6">
                    <FormInput type="number" field="ordem" placeholder="1" label="Ordem" onChange={handleChange} value={inputs?.ordem} error={errors?.ordem} />
                </div>
                <div className="col-6 col-md-3">
                    <FormInput type="number" field="peso" placeholder="00" label="Peso" onChange={handleChange} value={inputs?.peso} error={errors?.peso} />
                </div>
                <div className="col-6 col-md-3">
                    <FormInput type="number" field="repeticoes" placeholder="100" label="Repeticoes" onChange={handleChange} value={inputs?.repeticoes} error={errors?.repeticoes} />
                </div>
                <div className="col-6 col-md-3">
                    <FormInput type="number" field="series" placeholder="00" label="Series" onChange={handleChange} value={inputs?.series} error={errors?.series} />
                </div>
            </div>
        </>
    );
};

export default FormExercicio;