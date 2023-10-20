import React from "react";
import { InputContainer } from "./styles";

const Input = ({ label, name, img, register, errors, ...props }) => {
  const type = props.type ? props.type : "text";
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
      <div>
        <img src={img} alt={name} />
        <input type={type} id={name} {...props} {...register(name)} />
      </div>
      {errors && errors.message && (
        <p
          style={{
            color: "var(--text-first-color)",
            fontSize: "0.75rem",
            textAlign: "right",
            marginTop: "5px",
          }}
        >
          {errors.message}
        </p>
      )}
    </InputContainer>
  );
};

export default Input;
