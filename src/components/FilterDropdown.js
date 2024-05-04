import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'; 
import "./FilterDropdown.css"
const FilterDropdown = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
  };

  return (

    <Dropdown>
        <Dropdown.Toggle> 
          {selectedOption? selectedOption :"Select Language" }
        </Dropdown.Toggle> 
        <Dropdown.Menu>
            {options.map((name,index)=>(
                <Dropdown.Item
                key={index}
                onClick={(event) => {
                    handleSelect(event.target.text);
                  
                }}
                value={name}

                >
                    {name}
                </Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterDropdown;