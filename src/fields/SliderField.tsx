
import { type FormField } from "../types/form";

const SliderField = ({ field, value, onChange }: { field: FormField; value: any; onChange: (name: string, value: any) => void }) => (
    <>
        <input
            type="range"
            name={field.name}
            min={field.props?.min ?? 0}
            max={field.props?.max ?? 100}
            step={field.props?.step ?? 1}
            value={value || 0}
            onChange={(e) => onChange(field.name, Number(e.target.value))}
            className="w-full"
        />
        <div className="text-sm text-right text-gray-600 mt-1">Value: {value}</div>
    </>
);

export default SliderField;
