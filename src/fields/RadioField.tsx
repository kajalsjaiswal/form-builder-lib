import React from "react";
import type { FormField } from "../types/form";

type Props = {
    field: FormField;
    value: any;
    onChange: (name: string, value: any) => void;
};

const RadioField: React.FC<Props> = ({ field, value, onChange }) => {
    return (
        <>
            <div className="flex gap-4 flex-wrap">
                {field.options?.map((opt: any, idx: number) => (
                    <label key={idx} className="inline-flex items-center gap-2">
                        <input
                            type="radio"
                            name={field.name}
                            value={opt.value}
                            checked={value === opt.value}
                            onChange={() => onChange(field.name, opt.value)}
                            disabled={field.props?.disabled}
                        />
                        {opt.label}
                    </label>
                ))}
            </div>
        </>
    )
}
export default RadioField;