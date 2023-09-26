import React, { Dispatch, SetStateAction, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

interface PropsType {
  selectedFile: File | null,
  setSelectedFile: Dispatch<SetStateAction<File | null>>
}

export default function FileUploader({
  selectedFile,
  setSelectedFile
}: PropsType) {
  const id = uuidv4();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(fileInputRef)
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      if (fileInputRef.current) {
        fileInputRef.current.disabled = true;
      }
    } else {
      setSelectedFile(null);
    }
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSelectedFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.disabled = false;
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-1/2 mx-auto mt-20">
      <input
        type="file"
        accept="image/*,.pdf"
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
        id={id}
      />
      <label
        htmlFor={id}
        className="border-dotted border-orange-500 p-5 text-center"
      >
        {selectedFile ? (
          <div className="bg-blue-200 p-2 flex justify-between items-center px-3">
            <div className="text-left font-bold flex items-center">
              <div className="mr-2 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-14"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <div>
                <div>{selectedFile.name}</div>
                <div>{`${(selectedFile.size / 1024).toFixed(2)} KB`} </div>
              </div>
            </div>

            <div className="font-extrabold text-blue-500">
              <button onClick={handleDelete}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="border-4 border-dotted border-blue-500 p-4 font-bold">
            JPG, PNG or PDF
          </div>
        )}
      </label>
    </div>
  );
}
