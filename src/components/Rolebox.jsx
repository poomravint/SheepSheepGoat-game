import { useState } from "react";
import { roles } from "./roleUtils";
import "./Rolebox.css"

const Rolebox = ({ grouprole, setGrouprole }) => {
  const [white_num, setWhite_num] = useState("");
  const [black_num, setBlack_num] = useState("");
  const [goat_num, setGoat_num] = useState("");
  const roleOptions = Object.keys(roles);

  const handleAddRole = () => {
    setGrouprole(null)

    const roles = [];
    for (let i = 0; i < white_num; i++)
    {
      roles.push("WhiteSheep");
    }
    for (let i = 0; i < black_num; i++)
    {
      roles.push("BlackSheep");
    }
     for (let i = 0; i < goat_num; i++)
    {
      roles.push("Goat");
    }
    setGrouprole(roles)
    console.log(grouprole)
  };

  return (
    <>
      <div className="inputrole-box">
        <input className="white-team"
          type="number"
          value={white_num}
          onChange={(e) => setWhite_num(e.target.value)}
          placeholder="White Sheep"
        />
        <input className="black-team"
          type="number"
          value={black_num}
          onChange={(e) => setBlack_num(e.target.value)}
          placeholder="Black Sheep"
        />
        <input className="goat-team"
          type="number"
          value={goat_num}
          onChange={(e) => setGoat_num(e.target.value)}
          placeholder="Goat"
        />
        <button onClick={handleAddRole}>Set</button> 
      </div>
      
    </>
  );
};

export default Rolebox;
