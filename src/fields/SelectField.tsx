import React from "react";
import type { FormField } from "../types/form";

type Props = {
    field: FormField;
    value: any;
    onChange: (name: string, value: any) => void;
};


const SelectField: React.FC<Props> = ({ field, value, onChange }) => {
    return (
        <>
            <select
                name={field.name}
                value={value}
                onChange={(e) => onChange(field.name, e.target.value)}
                disabled={field.props?.disabled}
                required={field.props?.required}
                className="w-full border border-gray-300 p-2 rounded"
            >
                <option value="">Select an option</option>
                {field.options?.map((opt, idx) => (
                    <option key={idx} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </>
    )
}
export default SelectField;
