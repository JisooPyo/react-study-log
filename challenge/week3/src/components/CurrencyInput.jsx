const CurrencyInput = ({ label, value, onChange }) => {
  const onChangeValue = (e) => {
    onChange(e.target.value);
  };
  return (
    <div>
      {label}:
      <input type="number" value={value} onChange={onChangeValue} />
    </div>
  );
};

export default CurrencyInput;
