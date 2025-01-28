import React, { useState, useEffect } from 'react';
import { LuPencil } from "react-icons/lu";
import './AvatarUpload.css';

const AvatarUpload = ({
    setFormData,
    formData,
    inputField = null,
    format="png, jpg, jpeg",
    uploaded = null
}) => {
    const [imagePreview, setImagePreview] = useState(uploaded || "http://i.pravatar.cc/500?img=7");

    useEffect(() => {
        if (uploaded) {
            setImagePreview(uploaded);
        }
    }, [uploaded]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
                setFormData({
                    ...formData,
                    [inputField]: reader.result // Update the corresponding field in formData
                });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="avatar-upload">
            <div className="avatar-edit">
                <input
                    type="file"
                    id="imageUpload"
                    accept={`.${format.split(", ").join(", .")}`}
                    onChange={handleImageChange}
                />
                <label className='p-[9px]' htmlFor="imageUpload"><LuPencil /></label>
            </div>
            <div className="avatar-preview">
                <div id="imagePreview" style={{ backgroundImage: `url(${imagePreview})` }}></div>
            </div>
        </div>
    );
};

export default AvatarUpload;
