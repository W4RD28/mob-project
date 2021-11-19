import react from "react";
import '../Styles/PassField.css'

const PassField = react.forwardRef(({ label, type }, ref) => {
    return (
        <div>
            <label>{label}</label>
            <input ref={ref} type={type} placeholder="Password" className="PassField" />
        </div>
    );
});

export default PassField;