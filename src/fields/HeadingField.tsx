import React from "react";
import { type FormField } from "../types/form";

const HeadingField = ({ field }: { field: FormField }) => {
    const level = field.props?.level || 3;
    const fontSize = field.props?.fontSize || undefined;
    const textAlign = (field.props?.align || "left") as "left" | "right" | "center" | "justify" | "start" | "end";

    return (
        <div className="mb-4" style={{ fontSize: fontSize ? `${fontSize}px` : undefined, textAlign }}>
            {React.createElement(
                `h${level}`,
                {
                    style: {
                        fontWeight: field.props?.bold ? "bold" : "normal",
                        fontStyle: field.props?.italic ? "italic" : "normal",
                    },
                },
                field.label
            )}
            {field.description && <p className="text-sm text-gray-500 mt-1">{field.description}</p>}
        </div>
    );
};

export default HeadingField;
