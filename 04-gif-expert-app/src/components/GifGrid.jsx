import { getGifs } from "../helpers";
import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export const GifGrid = ({ category }) => {
  getGifs(category);
  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
