import React, { useState } from "react";
import { FaCar, FaPlane, FaHome, FaHeart } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const icons = [
  { id: "car", icon: <FaCar /> },
  { id: "plane", icon: <FaPlane /> },
  { id: "school", icon: <MdSchool /> },
  { id: "heart", icon: <FaHeart /> },
  { id: "home", icon: <FaHome /> },
];

const IconSelector = ({ selected, onSelect }) => {
  const [internalSelected, setInternalSelected] = useState("plane");
  const activeSelection = selected || internalSelected;

  const handleSelect = (iconId) => {
    setInternalSelected(iconId);
    onSelect?.(iconId);
  };

  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {icons.map((item) => (
        <div
          key={item.id}
          onClick={() => handleSelect(item.id)}
          className={`w-12 h-12 flex items-center justify-center rounded-lg cursor-pointer
            ${
              activeSelection === item.id
                ? "bg-[#F54900] text-white border-2 border-green-400"
                : "bg-gray-100 text-gray-500"
            }
          `}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default IconSelector;
