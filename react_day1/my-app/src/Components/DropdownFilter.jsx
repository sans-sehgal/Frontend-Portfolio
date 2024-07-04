import { people } from "../data";
import { useState } from "react";

const DropdownFilter = ({ handleProfessionChange, professionFilter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const professions = [...new Set(people.map(person => person.profession))];


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown}>
        Profession {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div>
          {professions.map((profession) => (
            <div key={profession}>
              <input
                type="checkbox"
                value={profession}
                onChange={handleProfessionChange}
                checked={professionFilter.includes(profession)}
              />
              {profession}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;
