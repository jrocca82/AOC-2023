import getFileContent from "../../helpers/getFileContent";

const runner = async () => {
  const race1Time = 40;
  const race1Distance = 219;
  const race2Time = 81;
  const race2Distance = 1012;
  const race3Time = 77;
  const race3Distance = 1365;
  const race4Time = 72;
  const race4Distance = 1089;

  const getWinningCombos = (raceTime: number, raceDistance: number) => {
    let winningCombos = 0;
    for (let i = 0; i < raceTime; i++) {
      let distanceTraveled = 0;
      distanceTraveled = (raceTime - i) * i;

      if (distanceTraveled > raceDistance) {
        winningCombos = winningCombos + 1;
      }
    }
    return winningCombos;
  };

  const race1Combos = getWinningCombos(race1Time, race1Distance);
  const race2Combos = getWinningCombos(race2Time, race2Distance);
  const race3Combos = getWinningCombos(race3Time, race3Distance);
  const race4Combos = getWinningCombos(race4Time, race4Distance);

  const res = race1Combos * race2Combos * race3Combos * race4Combos;

  console.log(res);
};

runner();
