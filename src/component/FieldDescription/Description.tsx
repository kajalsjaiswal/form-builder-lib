type Props = {
    description?: string;
};

const Description: React.FC<Props> = ({ description }) => {
    return (
        <>
            {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}
        </>
    )
}

export default Description