import { type FormField } from "../types/form";
const CheckboxField = ({ field, value, onChange }: { field: FormField; value: any; onChange: (name: string, value: any) => void }) => {
    const handleChange = (checkedValue: string | number) => {
        const newValue = value?.includes(checkedValue)
            ? value.filter((v: any) => v !== checkedValue)
            : [...(value || []), checkedValue];
        onChange(field.name, newValue);
    };

    return (
        <div className="flex gap-4 flex-wrap">
            {field.options?.map((opt, idx) => (
                <label key={idx} className="inline-flex items-center gap-2">
                    <input
                        type="checkbox"
                        value={opt.value}
                        checked={value?.includes(opt.value)}
                        onChange={() => handleChange(opt.value)}
                        disabled={field.props?.disabled}
                    />
                    {opt.label}
                </label>
            ))}
        </div>
    );
};

export default CheckboxField;
