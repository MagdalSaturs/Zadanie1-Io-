import "./JoiInput.css";

const JoiInput = (props) => {
  const { placeholder, value, onChange, schema } = props;

  schema.validate(value);

  const validationResult = schema.validate(value);

  const error = validationResult.error?.details[0].message;

  return (
    <div className="JoiInput">
      <input placeholder={placeholder} onChange={onChange} />
      {error !== undefined && <span>{error}</span>}
    </div>
  );
};

export default JoiInput;
