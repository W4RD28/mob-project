import react from "react";
import '../Styles/FormField.css';

const FormField = react.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input ref={ref} type={type} placeholder="Email address" className="FormField" />
    </div>
  );
});

export default FormField;