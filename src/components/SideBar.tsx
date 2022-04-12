import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

import '../styles/sidebar.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
};

type Props = {
  onChangeGenre: (genreId: number, title: string) => void;
}

export function SideBar({onChangeGenre}: Props) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number, title: string) {
    setSelectedGenreId(id);
    onChangeGenre(id, title);
  };
  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id, genre.title)}
              selected={selectedGenreId === genre.id}
            />
          ))}
      </div>

    </nav>
  )}