import React from "react";
import { useEffect, useState } from "react";
import "../styles/App.css";


//replace with your api key
const apiKey = process.env.REACT_APP_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
      //  console.log(data);
    }
  }, []);

  if (!photoData) return <div />;
  return (
    <>
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
      <div className="container">
        {photoData.media_type === "image" ? (
          <img
            src={photoData.url}
            alt={photoData.title}
            className="photo"
          ></img>
        ) : (
          <iframe
            title="space-video"
            src={photoData.url}
            frameBorder="0"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          />
        )}
        <h1 className="description">{photoData.title}</h1>
        <p className="description">{photoData.date}</p>
        <p className="description">{photoData.explanation}</p>
      </div>
    </>
  );
}
