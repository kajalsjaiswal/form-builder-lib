import { type FormField } from "../types/form";

const LinkField = ({ field }: { field: FormField }) => (
    <a
        href={field.props?.href || "#"}
        target={field.props?.target || "_blank"}
        rel="noopener noreferrer"
        className="text-blue-600 underline"
    >
        {field.label || field.props?.href}
    </a>
);

export default LinkField;
