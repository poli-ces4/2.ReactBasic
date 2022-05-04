import { useState } from "react";
import "./Avatar.css";

const Avatar = (props) => {
  const [enabledImg, setEnabledImg] = useState(true);
  const pictureDisabled = enabledImg ? "" : "disabled";
  /*
  const handlerChange = () => {
    setEnabledImg(!enabledImg);
  };
  */
  return (
    <picture>
      <img
        className={pictureDisabled}
        src={props.src}
        alt={props.name}
        onClick={() => setEnabledImg(!enabledImg)}
      />
      <strong>{enabledImg ? props.name : "Desactivado"}</strong>
    </picture>
  );
};

export default Avatar;

/*
const Avatar = ({ src, name }) => {
    return (
      <picture>
        <img src={src} alt={name} />
        <strong>${name}</strong>
      </picture>
    );
  };
  
  export default Avatar;
  */
