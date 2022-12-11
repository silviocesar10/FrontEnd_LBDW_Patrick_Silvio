
const FormSelect = ({ field, placeholder, onChange, options, label, value, error }) => {
    return (
        <>
            <div className="form-floating mt-3">
                <select className={`form-select ${error ? "is-invalid" : "is-valid"}`} onChange={onChange} name={field} id={field} value={value}>
                    <option value="">{placeholder}</option>
                    {options.map((option, index) => (
                        <option key={`${field}-${index}`} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <label htmlFor={field}>{label}</label>
            </div>
            {error && <p className="m-0 small text-danger">{error}</p>}
        </>
    );
};

export default FormSelect;