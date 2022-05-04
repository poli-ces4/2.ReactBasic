import React from "react";
import Avatar from "./components/Avatar";

const App = () => {
  const listImgs = [
    {
      id: "1",
      src: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Laura",
    },
    {
      id: "2",
      src: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Ana",
    },
    {
      id: "3",
      src: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Maria",
    },
  ];

  return (
    <>
      {listImgs.map((img) => (
        <Avatar key={img.id} src={img.src} name={img.name} />
      ))}
    </>
  );
};

export default App;
