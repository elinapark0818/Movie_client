import React from "react";
import ListItem from "./ListItem";

// * 리스트를 쫙 넣는거야 (data.json 에 들어있는애가 될테지)
import { MockMovies } from "./MockMovies";

export default function MovieList({ handleClick }) {
  return (
    <ul style={{ listStyle: "none" }}>
      {MockMovies.map((movie) => (
        <ListItem
          id={movie.id}
          title={movie.title}
          content={movie.content}
          rating={movie.rating}
          handleClick={handleClick}
        />
      ))}
    </ul>
  );
}
