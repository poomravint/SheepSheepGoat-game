import { useState } from "react";
import { getWord } from "./wordPair";

const Matchingbox = ({ groupname, grouprole, results, setResults }) => {
  const word = getWord();

  //* Shuffle item function
  const shuffle = (item) => [...item].sort(() => Math.random() - 0.5);

  const handlematching = () => {
    if (groupname.length === 0 && grouprole.length === 0) {
      alert("Please add Member and Role");
      return;
    }

    if (groupname.length != grouprole.length) {
      alert("Member and Role doesn't match");
      return;
    }

    //* Shuffle Role
    const shuffleRole = shuffle(grouprole);

    //* Shuffle Word
    const isABlackSheep = Math.random() < 0.5;
    const wsWord = isABlackSheep ? word.b : word.a;
    const bsWord = isABlackSheep ? word.a : word.b;

    const matched = groupname.map((name, index) => ({
      name,
      role: shuffleRole[index],
      word:
        shuffleRole[index] === "WhiteSheep"
          ? wsWord
          : shuffleRole[index] === "BlackSheep"
            ? bsWord
            : "???",
    }));
    setResults(matched);
    console.log(matched)
 
  };

  return (
    <>
      <div>
        <p>
          Member : {groupname.length} Role : {grouprole.length}
        </p>
        <button className="random-button" onClick={handlematching}>
          Random
        </button>
      </div>
    </>
  );
};

export default Matchingbox;
