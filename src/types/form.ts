export interface FormField {
        id: string;
        type: string;
        name: string;
        label?: string;
        placeholder?: string;
        description?: string;
        fields?: any;
        value?: any;
        props?: {
                required?: boolean;
                readOnly?: boolean;
                disabled?: boolean;
                min?: number;
                max?: number;
                step?: number;
                float?: boolean;
                href?: string;
                target?: "_blank" | "_self";
                accept?: string;
                rows?: number;
                maxLength?: number;
                level?: number;
                fontSize?: number;
                align?: string;
                bold?: boolean;
                italic?: boolean;
                errorMsg?: string;
                visibility?: string;
        };
        options?: {
                label: string;
                value: string | number;
                checked?: boolean;
        }[];
        defaultValue?: any;
        condition?: {
                field: string;
                value: any;
        };
        validation?: {
                pattern?: string;
                errorMessage?: string;
                minLength?: number;
                maxLength?: number;
                custom?: string;
        };
}
