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
      className={`uploadBox bg-neutral-800 m-5 rounded-3xl flex flex-col justify-center items-center text-lg border-2 border-dashed md:w-[40vw] md:p-0 h-[350px] duration-300 w-80vw ${
        isDragActive && "border-green-600"
      }`}
      {...getRootProps()}
    >
      {/* <input {...getInputProps()} /> */}
      {selectedFile && preview && gif && (
        <Image
          className="preview mb-10 rounded-3xl md:w-[370px] h-[230px] absolute w-[70%]"
          src={preview}
          alt=""
          width={250}
          height={230}
        />
      )}
      {showUpload ? (
        <div>
          {isDragActive ? (
            <p className={`mx-4 text-center ${selectedFile && "mt-[270px]"}`}>
              Drop the image here
            </p>
          ) : (
            <p className={`mx-4 text-center ${selectedFile && "mt-[270px]"}`}>
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
              className="preview rounded-3xl h-[350px] md:w-[100%] w-[80vw]"
              src={link}
              alt=""
              width={400}
              height={250}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default UploadBox;
