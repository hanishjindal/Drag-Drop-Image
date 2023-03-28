import React, { useRef } from "react";

const FileUploader = ({ onFileSelect, setShowUpload }) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    onFileSelect(file);
    // setShowUpload(false);
  };

  return (
    <div className="file-uploader">
      <input
        className="cursor-pointer w-60"
        type="file"
        onChange={handleFileInput}
        accept="image/*"
      />
      <button
        onClick={(e) => fileInput.current && fileInput.current.click()}
        className="btn btn-primary"
      />
    </div>
  );
};
export default FileUploader;
