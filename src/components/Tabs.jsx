import React from "react";

const Tabs = () => {
  const tabs = [
    {
      id: 1,
      title: "لیست1",
    },
    {
      id: 2,
      title: "لیست2",
    },
    {
      id: 3,
      title: "لیست3",
    },
  ];

  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <button key={index}>{tab.title}</button>
      ))}
    </div>
  );
};

export default Tabs;
