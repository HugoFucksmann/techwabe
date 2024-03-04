import React from "react";
import "./index.css";
import ScrollAnimation from "react-animate-on-scroll";

const FormInnerShadow = () => {
  return (
    <form className="form" id="contactForm">
      <div className="segment">
        <h3 className="stitle">Contactanos</h3>
      </div>
      <label className={"label"}>
        <input className="input" type="text" placeholder="Nombre:" />
      </label>
      <label className={"label"}>
        <input className="input" type="text" placeholder="Email:" />
      </label>
      <label className={"label"}>
        <textarea
          className="textarea"
          rows={5}
          type="text"
          placeholder="Asunto:"
        />
      </label>
      <button className="button red" type="button">
        Enviar
      </button>
    </form>
  );
};

export default FormInnerShadow;
