const FormRow = ({ type, name, value, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input ref={value} type={type} name={name} className="form-input" />
    </div>
  );
};

export default FormRow;
