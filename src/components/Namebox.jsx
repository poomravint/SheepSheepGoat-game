import { useState } from "react";
import "./Namebox.css";

const Namebox = ({ groupname, setGroupname }) => {
  const [name, setName] = useState("");
  const [deletingIndex, setdeletingIndex] = useState(null);

  const handleAddName = () => {
    if (name.trim() !== "") {
      setGroupname([...groupname, name]);
      setName("");
      console.log(groupname);
    }
  };

  const handleDelName = (indextoDel) => {
    setdeletingIndex(indextoDel);
    const updateGroupName = groupname.filter((_, index) => index != indextoDel);
    setGroupname(updateGroupName);
    setdeletingIndex(null);
  };

  return (
    <>
      <div className="namebox-container">
        <div className="content-box">
          <div className="inputname-box">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
            <button onClick={handleAddName}> Add </button>
          </div>
          <div className="member-list">
            <ul>
              {groupname.map((name, index) => (
                <li key={index} className="member-item">
                  <span style={{}}><strong>{name}</strong></span>
                  <button onClick={() => handleDelName(index)}>Del</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Namebox;
