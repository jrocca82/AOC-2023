import getFileContent from "../../helpers/getFileContent";

const runner = async () => {
  const fileContent = getFileContent(3);
  const splitByLine = fileContent.split("\n");
  const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+"];
  let total = 0;

  const getSymbolIndeces = splitByLine.map((line, i) => {
    const res = symbols.map((symbol) => {
      const symbolIndex = line.indexOf(symbol);
      switch (symbolIndex) {
        case -1:
          break;
        default:
          return { symbolIndex: line.indexOf(symbol), line: i };
      }
    });
    return res.filter((r) => r);
  });

  const getNumbersAndSymbols = splitByLine.map((line, i) =>
    line.split(".").filter((split) => split.length !== 0)
  );

  getNumbersAndSymbols.map((strings) => {
    strings.map((values) => {
      symbols.map((symb) => {
        if (values.includes(symb) && values.match(/[0-9]/g)) {
          const validNumbers = values.split(symb);
          const results = validNumbers.filter((split) => split.length !== 0);
          results.map((res) => {
            total += Number(res);
          });
        }
      });
    });
  });

  // console.log(total);
};

runner();
