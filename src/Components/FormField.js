import react from "react";

const FormField = react.forwardRef(({ label, type }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input ref={ref} type={type} placeholder="Email address" className="pl-3 pb-3 mb-3.5 pt-3 border-2 border-brown rounded w-full" />
    </div>
  );
});

export default FormField;