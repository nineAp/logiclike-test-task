import React from "react";
import { IGame } from "../services/getGames";
import GameCard from "./GameCard";
import "./game_list.scss";

interface IGamesListProps {
  games: IGame[];
}

function GamesList({ games }: IGamesListProps) {
  return (
    <div className="game__list">
      {games.map((game) => (
        <GameCard key={game.id} game={game}></GameCard>
      ))}
    </div>
  );
}

export default GamesList;
