import React from "react";
import Loader from "./Loader";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

function UploadBox({
  selectedFile,
  setSelectedFile,
  showUpload,
  link,
  preview,
  gif,
}) {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setSelectedFile(acceptedFiles[0]);
    },
    [setSelectedFile]
  );

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
        <Image
          className="preview mb-7 rounded-3xl m-1 w-[380px] h-[230px] absolute"
          src={preview}
          alt=""
          width={350}
          height={230}
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
            <Image
              className="preview rounded-3xl h-[350px]"
              src={link}
              alt=""
              width={800}
              height={250}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default UploadBox;
