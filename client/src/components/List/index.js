import React from "react";
//import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div>
      <ul className="collection">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="collection-item">{children}</li>;
}
