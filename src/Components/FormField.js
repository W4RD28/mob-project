import react from "react";

const FormField = react.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input ref={ref} type={type}/>
      </div>
    );
});

export default FormField;