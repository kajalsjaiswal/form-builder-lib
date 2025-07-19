import React from "react";
import type { FormField } from "../types/form";

type Props = {
    field: FormField;
    value: any;
    onChange: (name: string, value: any) => void;
};

const TextField: React.FC<Props> = ({ field, value, onChange }) => {
    return (
        <>
            <input
                type={field.type === "telephone" ? "tel" : field.type === "decimal" ? "number" : field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={value}
                onChange={(e) => onChange(field.name, e.target.value)}
                readOnly={field.props?.readOnly}
                disabled={field.props?.disabled}
                required={field.props?.required}
                step={field.props?.float ? "0.01" : field.props?.step}
                min={field.props?.min}
                max={field.props?.max}
                className="w-full border border-gray-300 p-2 rounded"
            />
        </>
    );
};

export default TextField;