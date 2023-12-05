import getFileContent from "../../helpers/getFileContent";

const runner = async () => {
  const possibleRed = 12;
  const possibleGreen = 13;
  const possibleBlue = 14;
  // batter up
  const fileContent = getFileContent(2);

  const splitByLine = fileContent.split("\n");
  const getGameIds = splitByLine.map((games) => games.split(":"));

  const getCombos = getGameIds.map((line) => {
    const games = line.map((l) => {
      const g = l.split(";");
      const cubeNumbers = g.map((game) => {
        return game.split(",");
      });
      return cubeNumbers[0];
    });
    return {
      gameId: games[0],
      combos: games[1],
    };
  });

  const filterGames = getCombos.map((values) => {
    const combos = Array.from(values.combos);
    const gameIds = Array.from(values.gameId);
  });
};

runner();
