import React from "react";
import "./styles.css";
import { useState } from "react";

const MusicDB = {
  Soul: [
    {
      name: "Let's Stay Together",
      SINGER: "Song by Al Green",
      rating: "4.5/5"
    },
    {
      name: "Be Thankful for What You Got",
      SINGER: "Song by William DeVaughn",
      rating: "4/5"
    }
  ],

  Hiphop: [
    {
      name: "Lose Yourself",
      SINGER: "Song by Eminem",
      rating: "5/5"
    },
    {
      name: "Dear Mama",
      SINGER: "Song by 2pac",
      rating: "4.3/5"
    }
  ],
  Pop: [
    {
      name: "Sorry",
      SINGER: "Song by Justin Bieber",
      rating: "3.9/5"
    },
    {
      name: "Umbrella",
      SINGER: "Song by Rihanna",
      rating: "4/5"
    }
  ],

  Classical: [
    {
      name: "Morning Raga",
      SINGER: "Song by Ravi Shankar",
      rating: "4.5/5"
    },
    {
      name: "Raag",
      SINGER: "Song by Mallikarjun Mansur",
      rating: "4.9/5"
    }
  ]
};

export default function App() {
  const [selectedMusic, setmusic] = useState("Hiphop");
  function musicClickHandler(music) {
    setmusic(music);
  }
  return (
    <div className="App">
      <h1 style={{ color: " #06b6d4" }}>Musical Genres🎵</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout all the musical genres,Select a genre to get started{" "}
      </p>
      <div>
        {Object.keys(MusicDB).map((music) => (
          <button
            onClick={() => musicClickHandler(music)}
            style={{
              cursor: "pointer",
              background: "#06b6d4",
              borderRadius: "0.2rem",
              padding: "0.8rem  2rem",
              border: "1px solid blue",
              margin: "2rem 0.4rem"
            }}
          >
            {music}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "centre" }}>
        <ul style={{ paddingInlineStart: "7" }}>
          {MusicDB[selectedMusic].map((musicgenre) => (
            <li
              key={musicgenre.name}
              style={{
                listStyle:"none",
                padding: "1rem 2rem",
                border: "1px solid #06b6d4",
                width: "80%",
                margin: "1rem 1rem",
          
          
              }}
            >
              {" "}
    <div style={{ fontSize: "larger" }}> {musicgenre.name} </div>
<div style={{ fontSize: "medium",color:"#06b6d4" }}> {musicgenre.SINGER} </div>
  <div style={{ fontSize: "small" }}> {musicgenre.rating}</div>
  </li>
          ))}</ul>
      </div></div>
  );
}
