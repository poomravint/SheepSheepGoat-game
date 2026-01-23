import { useState } from "react";
import { getWord } from "./wordPair";

const Matchingbox = ({ groupname, grouprole, results, setResults }) => {
  const word = getWord();

  const handlematching = () => {
    console.log(groupname.lenght)
    console.log(grouprole.lenght)

    if (groupname.lenght === 0 && grouprole.lenght === 0) {
      alert("Please add Member and Role");
      return;
    }

    if (groupname.lenght != grouprole.lenght){
      alert("Member and Role doesn't match");
      return;
    }

  };

  return (
    <>
      <div>
        <button className="random-button" onClick={handlematching}>Random</button>
      </div>
    </>
  );
};

export default Matchingbox;
