import getFileContent from "../../helpers/getFileContent";

const runner = async () => {
  const fileContent = getFileContent(4);
  const splitByLine = fileContent.split("\n");
  let total = 0;

  const splitCards = splitByLine.map((line) => line.split("|"));

  const winningNumbers = splitCards.map((cards) => cards[0].split(":")[1]);

  const givenNumbers = splitCards.map((cards) => cards[1]);

  for (let i = 0; i < winningNumbers.length; i++) {
    const winners = winningNumbers[i].split(" ").filter((n) => n);
    winners.map((w, index) => {
      if (givenNumbers[i].includes(w)) {
        let iteration = 1;
        total += iteration;
        iteration += 1;
        if (index === winners.length) {
          iteration = 1;
        }
      }
    });
  }

  console.log(total); // Not correct
};

runner();
