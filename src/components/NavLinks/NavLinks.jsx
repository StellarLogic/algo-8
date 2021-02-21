import React from "react";
import { Link, NavLink } from "react-router-dom";
import { data } from "./data";

const NavLinks = () => {
  return (
    <ul>
      {data.map(({ id, path, name }) => (
        <li key={id}>
          <NavLink to={path}>{name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
