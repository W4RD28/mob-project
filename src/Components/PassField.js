import react from "react";

const PassField = react.forwardRef(({ label, type }, ref) => {
    return (
        <div>
            <label>{label}</label>
            <input ref={ref} type={type} placeholder="Password" className="pl-3 pb-3 mb-3.5 pt-3 border-2 border-brown rounded w-full" />
        </div>
    );
});

export default PassField;