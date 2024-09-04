"use client";

import axios from "axios";
import { useState } from "react";

const ImageUploadForm = () => {
  const [faceType, setFaceType] = useState("");
  const [loading, setLoading] = useState(false);

  const loadImageBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const imgSubmit = async (file: File) => {
    setLoading(true); // Start loading
    try {
      const image = await loadImageBase64(file);

      const response = await axios({
        method: "POST",
        url: "https://detect.roboflow.com/face-shape-detection/1",
        params: {
          api_key: "ATJYTjAMsiyBgIcwA6xX",
        },
        data: image,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const detectedFaceType = response.data?.predictions[0]?.class;
      setFaceType(detectedFaceType || "No face detected");
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      imgSubmit(file);
    }
  };

  return (
    <>
      <div className="text-center font-extrabold text-4xl sm:text-3xl md:text-4xl lg:text-5xl pb-3 text-black">
        {faceType && (
          <h3 className="leading-relaxed text-3xl">
            <span className="text-8xl sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 inline-block drop-shadow-lg transition-all duration-500 ease-in-out">
              {faceType}
            </span>
            <br />
            Your Face Shape is
          </h3>
        )}
      </div>
      <div className="relative">
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group before:bg-gray-100 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
        >
          <div className="w-max relative flex-grow">
            <img
              className="w-12"
              src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
              alt="file upload icon"
              width="512"
              height="512"
            />
          </div>

          <div className="relative flex-grow">
            <span className="block text-base font-semibold relative text-blue-900 group-hover:text-blue-500 text-2xl">
              Upload your image here
            </span>
            <span className="mt-0.5 block text-sm text-gray-500">Max 2 MB</span>
          </div>

          {loading && (
            <div className="absolute right-4 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-blue-500 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="opacity-25"
                />
                <path
                  d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0"
                  className="opacity-75"
                />
              </svg>
            </div>
          )}

          <input
            id="file-upload"
            name="img"
            type="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>
    </>
  );
};

export default ImageUploadForm;
