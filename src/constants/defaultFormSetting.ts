export const formSettings = {
    title: "User Feedback Form",
    description: "Please fill out the form to share your feedback.",
    formId: "form-001",
    layout: {
        columns: 1, // or 2 or 3
        spacing: "md", // sm | md | lg
        labelPosition: "top", // top | left | right
        align: "center" // left | center | right
    },
    style: {
        themeColor: "#3B82F6",
        fontFamily: {
            name: "Inter",
            link: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        },
        borderRadius: "md", // sm | md | lg | xl
        backgroundColor: "#ffffff",
        textColor: "#111827",
        shadow: true
    },
    behavior: {
        showProgressBar: true,
        autoSaveDraft: false,
        showFieldHints: true,
        validateOnBlur: true,
        submitButtonText: "Submit Feedback",
        resetButton: true
    },
    access: {
        isPublic: true,
        requireLogin: false,
        allowedRoles: []
    },
    notifications: {
        emailTo: ["admin@example.com"],
        onSubmit: {
            sendEmail: true,
            showToast: true,
            redirectTo: "/thank-you"
        }
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    buttons: {
        submit: {
            text: "Send Feedback",
            icon: "paper-plane",
            position: "center",
            variant: "primary",
            size: "md",
            backgroundColor: "#2563EB", // Tailwind blue-600
            textColor: "#ffffff",
            loadingText: "Submitting...",
            successText: "Thanks!",
            showReset: true,
            resetText: "Clear",
            show: true,
            disabled: false
        }
    }

};
