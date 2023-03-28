import React from "react";
// import FileUploaded from "../components/FileUploader";
import Loader from "./Loader";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function UploadBox({
  selectedFile,
  setSelectedFile,
  showUpload,
  link,
  preview,
  gif,
}) {
  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div
      className={`uploadBox bg-neutral-800 m-5 rounded-3xl flex flex-col justify-center items-center text-lg border-2 border-dashed w-[600px] h-[350px] duration-300 ${
        isDragActive && "border-green-600"
      }`}
      {...getRootProps()}
    >
      {/* <input {...getInputProps()} /> */}
      {selectedFile && preview && gif && (
        <img
          className="preview mb-7 rounded-3xl m-1 w-[350px] h-[230px] absolute"
          src={preview}
        />
      )}
      {showUpload ? (
        <div>
          {isDragActive ? (
            <p className={`${selectedFile && "mt-[270px]"}`}>
              Drop the image here
            </p>
          ) : (
            <p className={`${selectedFile && "mt-[270px]"}`}>
              Drag and drop your image here or click to select files
            </p>
          )}
        </div>
      ) : (
        <div>
          {gif ? (
            <Loader />
          ) : (
            <img
              className="rounded-3xl mb-1 w-[650px] h-[355px]"
              src={link}
              alt=""
            />
          )}
        </div>
      )}
    </div>
  );
}

export default UploadBox;
