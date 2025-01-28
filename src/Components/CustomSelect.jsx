import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const CustomSelect = ({
    name,
    id,
    className,
    options = [],
    value: initialValue = '',
    onChange,
    placeholder,
    required = false,
    disabled = false,
    label,
    theme,
    classNamelabel,
    isOutline = false,
    isMulti = false, // Add isMulti prop
    ...props
}) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleChange = (selectedOption) => {
        // console.log(selectedOption);
        if (isMulti) {
            const selectedValues = selectedOption ? selectedOption.map(option => option.value) : [];
            setValue(selectedValues);
            if (onChange) onChange(selectedValues);
        } else {
            const selectedValue = selectedOption ? selectedOption.value : '';
            setValue(selectedValue);
            if (onChange) onChange(selectedValue);
        }
    };

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            border: 'none', // Remove the inner border
            boxShadow: state.isFocused ? `0 0 0 1px ${themeClass}` : 'none',
            borderRadius: '0.5rem', // Apply the same rounded corners as Tailwind's rounded-lg
            backgroundColor: disabled ? 'rgb(229 231 235)' : 'white', // Tailwind's gray-200 for disabled
            color: 'rgb(107 114 128)', // Tailwind's gray-500
            '&:hover': {
                borderColor: state.isFocused ? themeClass : provided.borderColor
            }
        }),
        placeholder: (provided) => ({
            ...provided,
            color: 'rgb(107 114 128)' // Tailwind's gray-500
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'rgb(107 114 128)' // Tailwind's gray-500
        }),
        input: (provided) => ({
            ...provided,
            color: 'rgb(107 114 128)' // Tailwind's gray-500
        }),
        option: (provided, state) => ({
            ...provided,
            padding: '10px', // Add padding to the option box
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 1 // Set a low zIndex
        })
    };

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

    const modifiedOptions = [{ value: '' || null, label: placeholder }, ...options];

    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className={`block mb-2 text-sm font-medium text-gray-900 ${classNamelabel} dark:text-white`}>
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <Select
                id={id}
                name={name}
                className={`${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} border text-gray-900 text-sm p-0.5 ${themeClass} ${className} focus:outline-none`}
                options={modifiedOptions}
                value={isMulti ? options.filter(option => value.includes(option.value)) : options.find(option => option.value === value)}
                onChange={handleChange}
                styles={customStyles}
                isDisabled={disabled}
                placeholder={placeholder}
                isSearchable
                menuPlacement='auto'
                isMulti={isMulti} // Pass the isMulti prop to Select
                {...props}
            />
        </div>
    );
};

export default CustomSelect;
