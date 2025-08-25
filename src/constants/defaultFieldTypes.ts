import type { FormField } from "../types/form";

export const defaultFormSchema: FormField[] = [
    {
        id: "field-1",
        type: "heading",
        name: "heading",
        label: "Heading",

        props: {
            level: 2,
            fontSize: 30,
            align: "center",
            bold: true,
            italic: false,
            visibility: "visible"
        },
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M96 128C96 110.3 110.3 96 128 96L224 96C241.7 96 256 110.3 256 128C256 145.7 241.7 160 224 160L208 160L208 272L432 272L432 160L416 160C398.3 160 384 145.7 384 128C384 110.3 398.3 96 416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L496 160L496 480L512 480C529.7 480 544 494.3 544 512C544 529.7 529.7 544 512 544L416 544C398.3 544 384 529.7 384 512C384 494.3 398.3 480 416 480L432 480L432 336L208 336L208 480L224 480C241.7 480 256 494.3 256 512C256 529.7 241.7 544 224 544L128 544C110.3 544 96 529.7 96 512C96 494.3 110.3 480 128 480L144 480L144 160L128 160C110.3 160 96 145.7 96 128z"/></svg>`,

        description: "This section covers your personal details."
    },
    {
        id: "field-name",

        type: "name",
        name: "name",
        label: "Name",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>`,

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

        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M144 128C144 92.7 172.7 64 208 64L432 64C467.3 64 496 92.7 496 128L496 512C496 547.3 467.3 576 432 576L208 576C172.7 576 144 547.3 144 512L144 128zM256 504C256 517.3 266.7 528 280 528L360 528C373.3 528 384 517.3 384 504C384 490.7 373.3 480 360 480L280 480C266.7 480 256 490.7 256 504zM432 128L208 128L208 432L432 432L432 128z"/></svg>`,

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

        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"/></svg>`,

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

        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544zM320 416C313.3 416 307 413.2 302.4 408.3L198.4 296.3C191.9 289.3 190.2 279.1 194 270.4C197.8 261.7 206.5 256 216 256L424 256C433.5 256 442.2 261.7 446 270.4C449.8 279.1 448.1 289.3 441.6 296.3L337.6 408.3C333.1 413.2 326.7 416 320 416z"/></svg>`,

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

        icon: `<svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM371.2 320C371.2 291.7 348.3 268.8 320 268.8C291.7 268.8 268.8 291.7 268.8 320C268.8 348.3 291.7 371.2 320 371.2C348.3 371.2 371.2 348.3 371.2 320zM224 320C224 267 267 224 320 224C373 224 416 267 416 320C416 373 373 416 320 416C267 416 224 373 224 320z"/></svg>`,

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

        icon: `<svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM404.4 276.7L324.4 404.7C320.2 411.4 313 415.6 305.1 416C297.2 416.4 289.6 412.8 284.9 406.4L236.9 342.4C228.9 331.8 231.1 316.8 241.7 308.8C252.3 300.8 267.3 303 275.3 313.6L302.3 349.6L363.7 251.3C370.7 240.1 385.5 236.6 396.8 243.7C408.1 250.8 411.5 265.5 404.4 276.8z"/></svg>`,

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

        icon: `<svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 64L512 64C529.7 64 544 78.3 544 96C544 113.7 529.7 128 512 128L480 128L480 544C480 561.7 465.7 576 448 576C430.3 576 416 561.7 416 544L416 128L368 128L368 544C368 561.7 353.7 576 336 576C318.3 576 304 561.7 304 544L304 384L256 384C167.6 384 96 312.4 96 224C96 135.6 167.6 64 256 64z"/></svg>`,

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

        label: "Rating",
        icon: `<svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320.1 417.6C330.1 417.6 340 419.9 349.1 424.6L423.5 462.5L410.5 380C407.3 359.8 414 339.3 428.4 324.8L487.4 265.7L404.9 252.6C384.7 249.4 367.2 236.7 357.9 218.5L319.9 144.1L319.9 417.7zM489.4 553C482.1 558.3 472.4 559.1 464.4 555L320.1 481.6L175.8 555C167.8 559.1 158.1 558.3 150.8 553C143.5 547.7 139.8 538.8 141.2 529.8L166.4 369.9L52 255.4C45.6 249 43.4 239.6 46.2 231C49 222.4 56.3 216.1 65.3 214.7L225.2 189.3L298.8 45.1C302.9 37.1 311.2 32 320.2 32C329.2 32 337.5 37.1 341.6 45.1L415 189.3L574.9 214.7C583.8 216.1 591.2 222.4 594 231C596.8 239.6 594.5 249 588.2 255.4L473.7 369.9L499 529.8C500.4 538.7 496.7 547.7 489.4 553z"/></svg>`,

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
        label: "Range Slider",
        icon: `<svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M96 128C78.3 128 64 142.3 64 160C64 177.7 78.3 192 96 192L182.7 192C195 220.3 223.2 240 256 240C288.8 240 317 220.3 329.3 192L544 192C561.7 192 576 177.7 576 160C576 142.3 561.7 128 544 128L329.3 128C317 99.7 288.8 80 256 80C223.2 80 195 99.7 182.7 128L96 128zM96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L342.7 352C355 380.3 383.2 400 416 400C448.8 400 477 380.3 489.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L489.3 288C477 259.7 448.8 240 416 240C383.2 240 355 259.7 342.7 288L96 288zM96 448C78.3 448 64 462.3 64 480C64 497.7 78.3 512 96 512L150.7 512C163 540.3 191.2 560 224 560C256.8 560 285 540.3 297.3 512L544 512C561.7 512 576 497.7 576 480C576 462.3 561.7 448 544 448L297.3 448C285 419.7 256.8 400 224 400C191.2 400 163 419.7 150.7 448L96 448z"/></svg>`,

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
        icon: `<svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,

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
        icon: `<i className="fa fas">1 2 3.</i>`,

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
        label: "Decimal",
        icon: `<i className="fa fas">0.0</i>`,

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
        label: "Image Upload",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M128 160C128 124.7 156.7 96 192 96L512 96C547.3 96 576 124.7 576 160L576 416C576 451.3 547.3 480 512 480L192 480C156.7 480 128 451.3 128 416L128 160zM56 192C69.3 192 80 202.7 80 216L80 512C80 520.8 87.2 528 96 528L456 528C469.3 528 480 538.7 480 552C480 565.3 469.3 576 456 576L96 576C60.7 576 32 547.3 32 512L32 216C32 202.7 42.7 192 56 192zM224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160C206.3 160 192 174.3 192 192C192 209.7 206.3 224 224 224zM420.5 235.5C416.1 228.4 408.4 224 400 224C391.6 224 383.9 228.4 379.5 235.5L323.2 327.6L298.7 297C294.1 291.3 287.3 288 280 288C272.7 288 265.8 291.3 261.3 297L197.3 377C191.5 384.2 190.4 394.1 194.4 402.4C198.4 410.7 206.8 416 216 416L488 416C496.7 416 504.7 411.3 508.9 403.7C513.1 396.1 513 386.9 508.4 379.4L420.4 235.4z"/></svg>`,

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
        icon: `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M576 320C576 320.9 576 321.8 576 322.7C575.6 359.2 542.4 384 505.9 384L408 384C381.5 384 360 405.5 360 432C360 435.4 360.4 438.7 361 441.9C363.1 452.1 367.5 461.9 371.8 471.8C377.9 485.6 383.9 499.3 383.9 513.8C383.9 545.6 362.3 574.5 330.5 575.8C327 575.9 323.5 576 319.9 576C178.5 576 63.9 461.4 63.9 320C63.9 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320zM192 352C192 334.3 177.7 320 160 320C142.3 320 128 334.3 128 352C128 369.7 142.3 384 160 384C177.7 384 192 369.7 192 352zM192 256C209.7 256 224 241.7 224 224C224 206.3 209.7 192 192 192C174.3 192 160 206.3 160 224C160 241.7 174.3 256 192 256zM352 160C352 142.3 337.7 128 320 128C302.3 128 288 142.3 288 160C288 177.7 302.3 192 320 192C337.7 192 352 177.7 352 160zM448 256C465.7 256 480 241.7 480 224C480 206.3 465.7 192 448 192C430.3 192 416 206.3 416 224C416 241.7 430.3 256 448 256z"/></svg>`,
        label: "Pick Color",
        description: "Choose a color theme for your profile."
    },
    {
        id: "field-12",
        type: "signature",
        name: "signature",
        label: "Digi Signature",
        description: "Please provide your signature.",
        icon: `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M192 192C192 174.3 206.3 160 224 160C241.7 160 256 174.3 256 192L256 199.8C256 227.5 253.6 255.1 248.9 282.3L164.5 307.6C123.9 319.8 96.1 357.2 96.1 399.6L96.1 432L24.1 432C10.8 432 .1 442.7 .1 456C.1 469.3 10.8 480 24.1 480L96.6 480C100.8 516 131.4 544 168.6 544C194.6 544 218.6 530.1 231.5 507.5L245.4 483.2C272.2 436.2 291.9 385.5 303.8 332.7L398.2 304.4L385.7 341.9C382.4 351.7 384.1 362.4 390.1 370.7C396.1 379 405.7 384 416 384L544 384C561.7 384 576 369.7 576 352C576 334.3 561.7 320 544 320L460.4 320L478.4 266.1C482.2 254.8 479.3 242.3 471 233.7C462.7 225.1 450.3 221.9 438.8 225.3L316.4 262.1C318.8 241.4 320 220.7 320 199.8L320 192C320 139 277 96 224 96C171 96 128 139 128 192L128 224C128 241.7 142.3 256 160 256C177.7 256 192 241.7 192 224L192 192zM182.8 369L231.8 354.3C221.4 388.1 207.3 420.7 189.7 451.5L175.8 475.8C174.3 478.4 171.5 480.1 168.4 480.1C163.7 480.1 159.9 476.3 159.9 471.6L159.9 399.7C159.9 385.6 169.2 373.1 182.7 369zM616 480C629.3 480 640 469.3 640 456C640 442.7 629.3 432 616 432L323.1 432C316.6 448.3 309.4 464.3 301.5 480L616 480z"/></svg>`
    }
];
