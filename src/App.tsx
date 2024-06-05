import React, { useEffect, useState } from "react";
import "./app.scss";
import { IGame, getGames } from "./services/getGames";
import GameFilter from "./components/GameFilter";
import GamesList from "./components/GamesList";

function App() {
  const [games, setGames] = useState<IGame[]>([]);
  const [selectedGames, setSelectedGames] = useState<IGame[]>([]);

  const loadGames = async () => {
    const loadedGames = await getGames();
    console.log(loadedGames);
    if (loadedGames) {
      setGames(loadedGames);
      setSelectedGames(loadedGames);
    }
  };

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="games_content">
          <GameFilter
            games={games}
            setSelectedGames={setSelectedGames}
          ></GameFilter>
          <GamesList games={selectedGames}></GamesList>
        </div>
      </div>
    </div>
  );
}

export default App;
