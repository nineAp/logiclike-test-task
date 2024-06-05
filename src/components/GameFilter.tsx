import React, { useEffect, useState } from "react";
import { IGame } from "../services/getGames";
import "./game_filter.scss";

interface IGameFilterProps {
  games: IGame[];
  setSelectedGames: React.Dispatch<React.SetStateAction<IGame[]>>;
}

function GameFilter({ games, setSelectedGames }: IGameFilterProps) {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    const uniqueTags = games.reduce((acc, game) => {
      game.tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
      return acc;
    }, [] as string[]);

    setTags(uniqueTags);
  }, [games]);

  useEffect(() => {
    if (selectedTags.length === 0) {
      setSelectedGames(games);
    } else {
      const filteredGames = games.filter((game) =>
        selectedTags.some((tag) => game.tags.includes(tag))
      );
      setSelectedGames(filteredGames);
    }
  }, [selectedTags, games, setSelectedGames]);

  const handleSetTag = (tag: string) => {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) {
        return prev.filter((t) => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  const handleResetTags = () => {
    setSelectedTags([]);
  };

  return (
    <div className="game__filter">
      <ul className="tags__list">
        <li
          className={`tags__item ${selectedTags.length === 0 ? "active" : ""}`}
          onClick={handleResetTags}
        >
          Все темы
        </li>
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={() => handleSetTag(tag)}
            className={`tags__item ${
              selectedTags.includes(tag) ? "active" : ""
            }`}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameFilter;
