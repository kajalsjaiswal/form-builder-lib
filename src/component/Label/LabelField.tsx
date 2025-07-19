import React from "react";

type Props = {
    label?: string;
};

const LabelField: React.FC<Props> = ({ label }) => {
    return (
        <>
            {label && <label className="block font-medium mb-1">{label}</label>}
        </>
    )
}

export default LabelField