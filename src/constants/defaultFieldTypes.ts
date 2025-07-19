import type { FormField } from "../types/form";

export const defaultFormSchema: FormField[] = [
    {
        id: "field-1",
        type: "heading",
        name: "heading",
        label: "Personal Information",
        props: {
            level: 2,
            fontSize: 30,
            align: "center",
            bold: true,
            italic: false,
            visibility: "visible"
        },
        description: "This section covers your personal details."
    },
    {
        id: "field-name",
        type: "group",
        name: "name",
        label: "Name",
        description: "Enter your full name with title.",
        fields: [
            {
                id: "field-name-prefix",
                type: "select",
                name: "prefix",
                label: "Prefix",
                placeholder: "Select prefix",
                options: [
                    { label: "Mr", value: "Mr" },
                    { label: "Miss", value: "Miss" },
                    { label: "Mrs", value: "Mrs" }
                ],
                props: {
                    required: true,
                    visibility: "visible"
                },
                description: "Choose your title."
            },
            {
                id: "field-first-name",
                type: "text",
                name: "firstName",
                label: "First Name",
                placeholder: "Enter first name",
                props: {
                    required: true,
                    visibility: "visible"
                },
                description: "Your given name.",
                validation: {
                    minLength: 2,
                    maxLength: 50
                }
            },
            {
                id: "field-middle-name",
                type: "text",
                name: "middleName",
                label: "Middle Name",
                placeholder: "Enter middle name",
                props: {
                    required: false,
                    visibility: "visible"
                },
                description: "Optional middle name."
            },
            {
                id: "field-last-name",
                type: "text",
                name: "lastName",
                label: "Last Name",
                placeholder: "Enter last name",
                props: {
                    required: true,
                    visibility: "visible"
                },
                description: "Your family name.",
                validation: {
                    minLength: 2,
                    maxLength: 50
                }
            }
        ]
    },
    {
        id: "field-13",
        type: "tel",
        name: "phoneNumber",
        label: "Phone Number",
        placeholder: "e.g. +91 98765 43210",
        props: {
            required: true,
            visibility: "visible",
            readOnly: false,
            disabled: false
        },
        description: "Provide a valid mobile or landline number.",
        validation: {
            pattern: "^[+]?[0-9\\s\\-]{10,15}$",
            errorMessage: "Enter a valid phone number"
        }
    },
    {
        id: "field-3",
        type: "email",
        name: "email",
        label: "Email",
        placeholder: "you@example.com",
        props: {
            required: true,
            visibility: "visible",
            disabled: false
        },
        description: "We'll use this email to contact you.",
        validation: {
            pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
            errorMessage: "Please enter a valid email address."
        }
    },
    {
        id: "field-4",
        type: "dropdown",
        name: "dropdown",
        label: "Dropdown",
        placeholder: "Select a department",
        options: [
            { label: "Option1", value: "option1" },
            { label: "Option2", value: "option2" },
            { label: "Option3", value: "option3" }
        ],
        props: {
            required: true,
            visibility: "visible",
            readOnly: false,
            disabled: false
        },
        description: "Select a category."
    },
    {
        id: "field-5",
        type: "radio",
        name: "Radio",
        label: "Radio",
        options: [
            { label: "Option1", value: "option1" },
            { label: "Option2", value: "option2" },
            { label: "Option3", value: "option3" },
            { label: "Option4", value: "option4" }
        ],
        props: {
            required: true,
            readOnly: false,
            disabled: false,
            visibility: "visible"
        },
        description: "Choose one of the options."
    },
    {
        id: "field-6",
        type: "checkbox",
        name: "Checkbox",
        label: "Checkbox",
        options: [
            { label: "Option1", value: "option1" },
            { label: "Option2", value: "Option2" },
            { label: "Option3", value: "Option3" }
        ],
        props: {
            required: true,
            readOnly: false,
            disabled: false,
            visibility: "visible"
        },
        description: "Select all that apply."
    },
    {
        id: "field-7",
        type: "textarea",
        name: "Description",
        label: "Description",
        placeholder: "Let us know anything else...",
        props: {
            rows: 4,
            required: true,
            readOnly: false,
            disabled: false,
            visibility: "visible"
        },
        description: "Any other notes or feedback.",
        validation: {
            minLength: 10,
            maxLength: 300
        }
    },
    {
        id: "field-8",
        type: "rating",
        name: "rating",
        label: "Rate the Experience",
        props: {
            min: 0,
            max: 5,
            readOnly: false,
            disabled: false,
            visibility: "visible"
        },
        description: "How would you rate your experience?"
    },
    {
        id: "field-9",
        type: "slider",
        name: "rating",
        label: "Rate the Experience",
        props: {
            min: 0,
            max: 10,
            step: 1,
            readOnly: false,
            disabled: false,
            visibility: "visible",
            required: true
        },
        description: "Slide to rate your satisfaction."
    },
    {
        id: "field-10",
        type: "file",
        name: "file_upload",
        label: "File Upload",
        props: {
            accept: ".pdf,.docx",
            required: true,
            readOnly: false,
            disabled: false,
            visibility: "visible",
            min: 1,
            max: 1
        },
        description: "Upload your resume or document."
    },
    {
        id: "field-14",
        type: "number",
        name: "Number",
        label: "Number",
        placeholder: "e.g. 100",
        props: {
            required: true,
            min: 1,
            max: 10000,
            visibility: "visible",
            readOnly: false,
            disabled: false
        },
        description: "Enter an Number",
        validation: {
            minLength: 1,
            maxLength: 5
        }
    },
    {
        id: "field-15",
        type: "decimal",
        name: "budget",
        label: "Budget (in Lakhs)",
        placeholder: "e.g. 1.5",
        props: {
            required: false,
            min: 0.1,
            max: 999.99,
            step: 0.01,
            float: true,
            visibility: "visible",
            readOnly: false,
            disabled: false
        },
        description: "Approximate budget in decimal format.",
        validation: {
            pattern: "^\\d+(\\.\\d{1,2})?$",
            errorMessage: "Enter a valid decimal (up to 2 decimal places)"
        }
    },
    {
        id: "field-16",
        type: "image",
        name: "ImageUpload",
        label: "ImageUpload",
        description: "Upload a JPG or PNG image (max size: 5MB).",
        props: {
            accept: "image/jpeg,image/png",
            required: false,
            readOnly: false,
            disabled: false,
            visibility: "visible",
            min: 1,
            max: 1
        },
        validation: {
            pattern: "\\.(jpg|jpeg|png)$",
            errorMessage: "Only JPG and PNG images are allowed."
        }
    },
    {
        id: "field-11",
        type: "colorPicker",
        name: "themeColor",
        label: "Pick a Theme Color",
        description: "Choose a color theme for your profile."
    },
    {
        id: "field-12",
        type: "signature",
        name: "signature",
        label: "Digital Signature",
        description: "Please provide your signature."
    }
];
