import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");
  const onInputChange = (e) => {
    setinputValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    //eliminacion de espacios al final y al principio para hacer una validacion
    if (inputValue.trim().length <= 1) return;

    //Destructuracion
    //setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setinputValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
