import React from "react";
import { IGame } from "../services/getGames";
import "./game_card.scss";

interface IGameCardProps {
  game: IGame;
}

function GameCard({ game }: IGameCardProps) {
  return (
    <div className="game__card">
      <div
        className="game__card__top"
        style={{ backgroundColor: `${game.bgColor}` }}
      >
        <img src={game.image} alt="game_image" width={144} height={144} />
      </div>
      <div className="game__card__bottom">
        <h2>{game.name}</h2>
      </div>
    </div>
  );
}

export default GameCard;
