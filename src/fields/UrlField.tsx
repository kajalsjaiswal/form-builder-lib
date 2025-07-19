import { type FormField } from "../types/form";

const UrlField = ({ field, value, onChange }: { field: FormField; value: any; onChange: (name: string, value: any) => void }) => (

    <input
        type="url"
        name={field.name}
        placeholder={field.placeholder || "https://example.com"}
        value={value || ""}
        onChange={(e) => onChange(field.name, e.target.value)}
        className="w-full border border-gray-300 p-2 rounded"
    />
);

export default UrlField;
