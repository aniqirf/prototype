import React, { useState } from 'react';

const Textarea = ({
    name,
    id,
    className = '',
    placeholder = '',
    required = false,
    label,
    theme,
    disabled = false,
    rows = 4,
    ...props
}) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const validateInput = (value) => {
        let errorMessage = '';

        if (required && !value) {
            errorMessage = 'This field is required.';
        }

        setError(errorMessage);
        return !errorMessage;
    };

    const handleChange = (e) => {
        const { value } = e.target;
        // console.log("Textarea value onChange:", value); // Add this line
        setValue(value);
        if (isTouched) {
            validateInput(value);
        }
    };

    const handleBlur = (e) => {
        const { value } = e.target;
        setIsTouched(true);
        // console.log("Textarea value onBlur:", value);
        validateInput(value);
    };

    let themeClass = '';
    if (theme === 'success') {
        themeClass = 'border-green-500 focus:border-2 focus:border-green-600';
    } else if (theme === 'warning') {
        themeClass = 'border-yellow-500 focus:border-2 focus:border-yellow-600';
    } else if (theme === 'danger') {
        themeClass = 'border-red-500 focus:border-2 focus:border-red-700';
    } else if (theme === 'dark') {
        themeClass = 'border-gray-900 focus:border-2 focus:border-gray-700';
    } else if (theme === 'info') {
        themeClass = 'border-blue-500 focus:border-2 focus:border-blue-700';
    } else if (theme === 'primary') {
        themeClass = 'border-[#20409a] focus:border-2 focus:border-[#162f7a]';
    } else {
        themeClass = 'border-[#20409A] focus:border-2 focus:border-[#162f7a]';
    }

    return (
        <div className={`textarea-container ${className} w-full`}>
            {label && (
                <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <textarea
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={placeholder}
                disabled={disabled}
                rows={rows}
                className={`${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
                    } border block p-2.5 w-full text-sm text-gray-900 rounded-lg ${themeClass} focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
                {...props}
            />
            {/* {isTouched && error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
        </div>
    );
};

export default Textarea;
