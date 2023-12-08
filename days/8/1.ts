import getFileContent from "../../helpers/getFileContent";

interface NodeType {
  node: string;
  rightNode: string;
  leftNode: string;
}
const runner = async () => {
  // batter up
  const fileContent = getFileContent(8);
  const splitByLine = fileContent.split("\n");
  const RLPattern = splitByLine[0];
  const coordinates = splitByLine.slice(2, splitByLine.length - 1);

  const nodeDirections = coordinates.map((coord) => {
    const [node, , rightNode, leftNode] = coord.split(" ");

    return {
      node,
      rightNode: rightNode.replace(/[(),]/g, ""),
      leftNode: leftNode.replace(/[(),]/g, ""),
    };
  });

  const checkRightOrLeft = (node: NodeType, i: number) => {
    if (RLPattern[i] === "R") {
      return nodeDirections.find((nd) => nd.node === node?.rightNode)!;
    } else {
      return nodeDirections.find((nd) => nd.node === node?.leftNode);
    }
  };

  let currentNode: NodeType = nodeDirections.find((nd) => nd.node === "AAA")!;

  for (let i = 0; i < nodeDirections.length; i++) {
    if (currentNode.node === "ZZZ") {
      console.log(i + 1);
    }
    currentNode = checkRightOrLeft(currentNode, i)!;
  }
};

runner();
