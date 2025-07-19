import { type FormField } from "../types/form";

const RatingField = ({ field, value, onChange }: { field: FormField; value: any; onChange: (name: string, value: any) => void }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`cursor-pointer text-2xl ${i <= value ? "text-yellow-500" : "text-gray-300"}`}
          onClick={() => onChange(field.name, i)}
        >
          ★
        </span>
      ))}
    </div>
);

export default RatingField;
