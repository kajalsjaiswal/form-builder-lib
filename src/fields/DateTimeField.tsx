import { type FormField } from "../types/form";

const DateTimeField = ({
    field,
    value,
    onChange,
}: {
    field: FormField;
    value: any;
    onChange: (name: string, value: any) => void;
}) => {
    const inputType: "date" | "time" | "datetime-local" =
        field.type === "time"
            ? "time"
            : field.type === "dateTime"
                ? "datetime-local"
                : "date"; // fallback

    return (
        <>
            <input
                type={inputType}
                name={field.name}
                value={value || ""}
                onChange={(e) => onChange(field.name, e.target.value)}
                className="w-full border border-gray-300 p-2 rounded"
            />
        </>
    );
};

export default DateTimeField;
