"use client";

import axios from "axios";
import { useState } from "react";

const ImageUploadForm = () => {
  const [faceType, setFaceType] = useState("");
  const loadImageBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const imgSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    //const image = form.img?.files[0];
    const image = await loadImageBase64(form.img?.files[0]);

    await axios({
      method: "POST",
      url: "https://detect.roboflow.com/face-shape-detection/1",
      params: {
        api_key: "ATJYTjAMsiyBgIcwA6xX",
      },
      data: image,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (response) {
        setFaceType(response.data?.predictions[0]?.class);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={imgSubmit}>
        <input type="file" name="img" />
        <button type="submit">Submit</button>
      </form>
      <div className="text-center font-extrabold pt-10 text-9xl">
        {faceType && <h1>{faceType}</h1>}
      </div>
    </div>
  );
};

export default ImageUploadForm;
