import { useState, useEffect } from "react"

export default function useForm(submitHandler, initialValues, validationFunction) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setValues(initialValues);
        setErrors({});
    }, [initialValues])

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        // If a validation function is provided, perform validation
        if (validationFunction) {
            const validationErrors = validationFunction(values);

            // Set validation errors or an empty object
            setErrors(validationErrors || {});

            if (Object.keys(validationErrors || {}).length > 0) {
                return; // Do not proceed with submit if there are validation errors
            }
        }

        // Call the submitHandler with the form values
        await submitHandler(values);

        setValues(initialValues);
    };

    return {
        values,
        errors,
        onChange,
        onSubmit,
        setErrors,
        setValues,
    }
}