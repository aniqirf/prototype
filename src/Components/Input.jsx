import React, { useState, useEffect } from 'react';

const Input = ({
    type = 'text',
    name,
    id,
    className,
    classNamelabel,
    placeholder,
    required = false,
    label,
    theme,
    disabled = false,
    icon,
    iconPosition = 'end',
    iconCard = false,
    accept, // accept attribute for file input
    value = '', // Ensure default value is an empty string
    onChange,
    ...props
}) => {
    const [error, setError] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    // Normalize value to empty string if null or undefined
    const normalizedValue = value ?? '';

    // Effect to validate input whenever 'normalizedValue' or 'isTouched' changes
    useEffect(() => {
        if (isTouched) {
            validateInput();
        }
    }, [normalizedValue, isTouched]);

    // Function to validate input based on type and required validation
    const validateInput = () => {
        let errorMessage = '';
        const trimmedValue = normalizedValue.trim();

        // Check if required and value is empty or whitespace
        if (required && !trimmedValue) {
            errorMessage = 'This field is required.';
        } else {
            // Switch based on input type
            switch (type) {
                case 'email':
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(trimmedValue)) {
                        errorMessage = 'Emel tidak sah, Sila masukkan emel yang sah.';
                    }
                    break;
                case 'number':
                    if (isNaN(trimmedValue)) {
                        errorMessage = 'This field must be a number.';
                    }
                    break;
                case 'url':
                    if (!/^(ftp|http|https):\/\/[^ "]+$/.test(trimmedValue)) {
                        errorMessage = 'URL tidak sah, Sila masukkan URL yang sah.';
                    }
                    break;
                case 'tel':
                    if (!/^0\d{9,10}$/.test(trimmedValue)) {
                        errorMessage = 'No Telefon tidak sah, Sila masukkan No Telefon yang sah.';
                    }
                    break;
                case 'date':
                    if (isNaN(Date.parse(trimmedValue))) {
                        errorMessage = 'Tarikh tidak sah, Sila masukkan tarikh yang sah.';
                    }
                    break;
                case 'password':
                    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                    if (!passwordPattern.test(trimmedValue)) {
                        errorMessage = 'Kata laluan mesti sekurang-kurangnya 8 aksara, satu huruf besar, satu huruf kecil, satu nombor dan satu aksara khas.';
                    }
                    break;
                case 'no_ic':
                    if (!/^\d{12}$/.test(trimmedValue)) {
                        errorMessage = 'No Kad Pengenalan tidak sah, Sila masukkan No Kad Pengenalan yang sah.';
                    }
                    break;
                default:
                    break;
            }

        }
        // Set error state based on validation result
        setError(errorMessage);
        return !errorMessage; // Return validation result (true if no error)
    };

    // Function to handle onBlur event
    const handleBlur = () => {
        setIsTouched(true); // Set isTouched to true
        validateInput(); // Validate input
    };

    // Determine themeClass based on theme prop
    let themeClass = '';

    switch (theme) {
        case 'success':
            themeClass = 'bg-white border-green-500 focus:border-2 focus:border-green-600 rounded-lg';
            break;
        case 'warning':
            themeClass = 'bg-white border-yellow-500 focus:border-2 focus:border-yellow-600 rounded-lg';
            break;
        case 'danger':
            themeClass = 'bg-white border-red-500 focus:border-2 focus:border-red-700 rounded-lg';
            break;
        case 'dark':
            themeClass = 'bg-white border-gray-300 focus:border-2 focus:border-gray-700 rounded-lg';
            break;
        case 'info':
            themeClass = 'bg-white border-blue-500 focus:border-2 focus:border-blue-700 rounded-lg';
            break;
        case 'primary':
            themeClass = 'bg-white border-[#20409a] focus:border-2 focus:border-[#162f7a] rounded-lg';
            break;
        case 'search':
            themeClass = 'bg-white/70 border-gray-400 focus:border-gray-800 rounded-lg placeholder-black text-black';
            break;
        default:
            themeClass = 'bg-white border-[#20409A] focus:border-2 focus:border-[#162f7a] rounded-lg';
            break;
    }

    return (
        <div className="relative w-full">
            {/* Render label if provided */}
            {label && (
                <label htmlFor={id} className={`block mb-2 text-sm font-medium text-[#263238] ${classNamelabel}  dark:text-white`}>
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <div className="relative">
                {/* Render icon if provided */}
                {icon && (
                    <span className={`absolute inset-y-0 ${iconPosition === 'start' ? 'left-0 pl-3' : 'right-0 pr-3'} flex items-center pointer-events-none`}>
                        {iconCard ? (
                            <div className="bg-gray-200 p-2 rounded">
                                {icon}
                            </div>
                        ) : (
                            icon
                        )}
                    </span>
                )}
                <input
                    type={type}
                    name={name}
                    id={id}
                    className={`${disabled ? '!bg-gray-100 cursor-not-allowed' : ''} border text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-600 dark:placeholder-gray-400 dark:text-white ${themeClass} ${className} focus:outline-none ${icon && iconPosition === 'start' ? 'pl-10' : ''} ${icon && iconPosition === 'end' ? 'pr-10' : ''}`}
                    placeholder={placeholder}
                    required={required}
                    value={normalizedValue}
                    onChange={onChange}
                    onBlur={handleBlur}
                    onFocus={() => setIsTouched(true)}
                    disabled={disabled}
                    {...props}
                />
            </div>
            {/* Render error message if input is touched and there's an error */}
            {/* {isTouched && error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
        </div>
    );
};

export default Input;
