import getFileContent from "../../helpers/getFileContent";

const runner = async () => {
  // batter up
  const fileContent = getFileContent(1);
  const splitByLine = fileContent.split("\n");
  const findNumbersRegex = /[0-9]/g;

  const findAndAddDigits = splitByLine.map((line) => {
    const numbers = line.match(findNumbersRegex);

    const addedLines: string[] = [];

    if (numbers) {
      addedLines.push((numbers[0]) + (numbers[numbers.length - 1]));
    }

    console.log(addedLines[0]);
    return addedLines[0];
  });

  let total = 0;

  for (let i = 0; i < findAndAddDigits.length; i++) {
    if (findAndAddDigits[i]) {
      total = total + Number(findAndAddDigits[i]);
    }
  }

  console.log(total);
};

runner();
