import { useState } from "react";
import { getWord } from "./wordPair";
import "./Matchingbox.css";

const Matchingbox = ({
  groupname,
  grouprole,
  results,
  setResults,
  start,
  setStart,
  setRealAns,
}) => {
  const word = getWord();

  //* Shuffle item function
  const shuffle = (item) => [...item].sort(() => Math.random() - 0.5);

  const handleClick = () => {
    handlematching();
    toggleStatus();
  };

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
    setRealAns(wsWord);
    console.log(matched);
  };

  const toggleStatus = () => {
    console.log(start);
    start === true ? setStart(!start) : "";
  };

  return (
    <>
      <div className="list-content">
        <p>
          Member : <strong>{groupname.length}</strong> Role :{" "}
          <strong>{grouprole.length}</strong>
        </p>
        <button className="random-button" onClick={handleClick}>
          <strong>Random</strong>
        </button>
      </div>
    </>
  );
};

export default Matchingbox;
