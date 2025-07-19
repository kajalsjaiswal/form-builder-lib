import { type FormField } from "../types/form"

const FileUploadField = ({ field, onChange }: { field: FormField; onChange: (name: string, value: File | null) => void }) => (
    <input
        type="file"
        name={field.name}
        accept={field.props?.accept}
        onChange={(e) => onChange(field.name, e.target.files?.[0] || null)}
        disabled={field.props?.disabled}
        required={field.props?.required}
        className="w-full"
    />
);

export default FileUploadField;
