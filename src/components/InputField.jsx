

function InputField({ label, id, name, type, placeholder, value, onChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
        id={id} 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default InputField;