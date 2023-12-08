import getFileContent from "../../helpers/getFileContent";

const runner = async () => {
  // batter up
  let winningCombos = 0;
  for (let i = 0; i < 40817772; i++) {
    let distanceTraveled = 0;
    distanceTraveled = (40817772 - i) * i;

    if (distanceTraveled > 219101213651089) {
      winningCombos = winningCombos + 1;
    }
  }
  console.log(winningCombos);
};

runner();
