import React from "react";

export default function ListItem({ id, title, content, rating, handleClick }) {
  return (
    <li style={{ display: "flex" }} onClick={() => handleClick(id)}>
      <div
        style={{
          backgroundColor: "red",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>{title}</div>
        <div>{content}</div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {rating}
      </div>
    </li>
  );
}
