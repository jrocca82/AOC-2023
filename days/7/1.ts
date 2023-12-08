import getFileContent from "../../helpers/getFileContent";

interface Hand {
  cards: string;
  bid: string;
}

const runner = async () => {
  // batter up
  const fileContent = getFileContent(7);
  const splitByLine = fileContent.split("\n");
  const order = "23456789TJQKA";

  // Five of a kind, where all five cards have the same label: AAAAA
  // Four of a kind, where four cards have the same label and one card has a different label: AA8AA
  // Full house, where three cards have the same label, and the remaining two cards share a different label: 23332
  // Three of a kind, where three cards have the same label, and the remaining two cards are each different from any other card in the hand: TTT98
  // Two pair, where two cards share one label, two other cards share a second label, and the remaining card has a third label: 23432
  // One pair, where two cards share one label, and the other three cards have a different label from the pair and each other: A23A4
  // High card, where all cards' labels are distinct: 23456

  const sortedHands = splitByLine.map((hand) => {
    const [cards, bid] = hand.split(" ");

    let sortedHand: string[] = [];
    for (let i = 0; i < order.length; i++) {
      for (let j = 0; j < cards.length; j++) {
        if (order[i] === cards.split("")[j].charAt(0)) {
          sortedHand.push(cards.split("")[j]);
        }
      }
    }
    const countDuplicates = (str: string) => {
      const counts: { [key: string]: number } = {};
      let duplicates: number = 0;
  
      for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
        if (counts[char] === 2) duplicates++;
      }
  
      return duplicates
    };
    countDuplicates(cards);
    sortedHand.sort(
      (a: string, b: string): number =>
        countDuplicates(b) - countDuplicates(a)
    );
    return { cards: sortedHand.join(""), bid };
  });

  console.log(sortedHands)

  console.log(sortedHands[sortedHands.length - 1]);
  console.log(sortedHands[0]);
};

// THIS ANSWER IS FROM CHAT GPT BUT IS NOT CORRECT
// function handStrength(hand: string): HandStrength {
//   const cardCounts: { [key: string]: number } = {};
//   for (const card of hand) {
//     cardCounts[card] = (cardCounts[card] || 0) + 1;
//   }

//   const counts = Object.values(cardCounts).sort((a, b) => b - a);
//   const sortedHand = Object.keys(cardCounts).sort(
//     (a, b) => cardCounts[b] - cardCounts[a] || b.localeCompare(a)
//   );

//   if (counts[0] === 5) return { type: 7, sortedHand };
//   if (counts[0] === 4) return { type: 6, sortedHand };
//   if (counts[0] === 3 && counts[1] === 2) return { type: 5, sortedHand };
//   if (counts[0] === 3) return { type: 4, sortedHand };
//   if (counts[0] === 2 && counts[1] === 2) return { type: 3, sortedHand };
//   if (counts[0] === 2) return { type: 2, sortedHand };
//   return { type: 1, sortedHand };
// }

// function camelCards(hands: string[]): number {
//   const cardOrder = "AKQJT98765432";
//   const handStrengths = hands.map((hand) => {
//     const [cardHand, bidStr] = hand.split(" ");
//     return {
//       hand: cardHand,
//       bid: parseInt(bidStr),
//       strength: handStrength(cardHand),
//     };
//   });

//   handStrengths.sort((a, b) => {
//     const typeDiff = b.strength.type - a.strength.type;
//     if (typeDiff !== 0) return typeDiff;
//     for (let i = 0; i < 5; i++) {
//       if (a.strength.sortedHand[i] !== b.strength.sortedHand[i]) {
//         return (
//           cardOrder.indexOf(b.strength.sortedHand[i]) -
//           cardOrder.indexOf(a.strength.sortedHand[i])
//         );
//       }
//     }
//     return 0;
//   });

//   return handStrengths.reduce(
//     (acc, hand, index) => acc + hand.bid * (index + 1),
//     0
//   );
// }
// const totalWinnings: number = camelCards(splitByLine);
// console.log("Total winnings:", totalWinnings); // THIS IS NOT CORRECT

runner();
