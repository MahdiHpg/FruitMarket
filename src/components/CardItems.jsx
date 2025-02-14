import React, { useEffect, useState } from "react";
import dataColors from "../assets/data.json";

const CardItems = ({ data }) => {
  const [myColors, setMyColors] = useState([]);

  useEffect(() => {
    const shuffled = [...dataColors.colors].sort(() => Math.random() - 0.5);
    setMyColors(shuffled);
  }, []);

  return (
    <div className="cardItems">
      <ul>
        {myColors.length !== 0 &&
          data.map((item, index) => (
            <li
              key={index}
              style={{
                backgroundColor: myColors[index % myColors.length].bgColor,
                borderRadius: " 5px 15px 15px 10px",
                boxShadow: "0px 0px 16px #616161",
              }}
            >
              <div>
                <img src={item.img} alt={item.img} />
                <p>{item.name}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CardItems;
