import { type FormField } from "../types/form";

const TextAreaField = ({ field, value, onChange }: { field: FormField; value: any; onChange: (name: string, value: any) => void }) => (

    <textarea
        name={field.name}
        rows={field.props?.rows || 4}
        placeholder={field.placeholder}
        value={value || ""}
        onChange={(e) => onChange(field.name, e.target.value)}
        readOnly={field.props?.readOnly}
        disabled={field.props?.disabled}
        required={field.props?.required}
        maxLength={field.props?.maxLength}
        className="w-full border border-gray-300 p-2 rounded"
    />

);

export default TextAreaField;
