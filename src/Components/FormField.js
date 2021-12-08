import react from "react";
import '../Styles/FormField.css';

const FormField = react.forwardRef(({ label, type, placeholder }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input ref={ref} type={type} placeholder={placeholder} className="FormField" />
    </div>
  );
});

export default FormField;