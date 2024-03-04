import React, { useRef, useState, useEffect } from "react";
import SectionLayout from "../../layouts/sectionLayout";
import "./proyectos.css";

import torre from "../../assets/img/torre.jpeg";

const Proyectos = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      imageUrl: torre,
      title: "Lossless Youths",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      id: 2,
      imageUrl: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
      title: "Estrange Bond",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      id: 3,
      imageUrl: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
      title: "The Gate Keeper",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      id: 4,
      imageUrl:
        "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg",
      title: "Last Trace Of Us",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      id: 5,
      imageUrl: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
      title: "Urban Decay",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
    {
      id: 6,
      imageUrl:
        "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg",
      title: "The Migration",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
    },
  ]);

  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);

  const handlePrevClick = () => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      const lastItem = updatedItems.pop();
      updatedItems.unshift(lastItem);
      return updatedItems;
    });
  };

  const handleNextClick = () => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      const firstItem = updatedItems.shift();
      updatedItems.push(firstItem);
      return updatedItems;
    });
  };

  useEffect(() => {
    setPrevDisabled(false);
    setNextDisabled(false);
  }, []);

  useEffect(() => {
    const firstItem = items[0];
    const lastItem = items[items.length - 1];
    setPrevDisabled(firstItem.id === 1);
    setNextDisabled(lastItem.id === 6);
  }, [items]);

  return (
    <SectionLayout section={"proyectos"}>
      <main>
        <ul className="slider">
          {items.map((item) => (
            <li
              key={item.id}
              className="item"
              style={{ backgroundImage: `url('${item.imageUrl}')` }}
            >
              <div className="content">
                <h2 className="title">{item.title}</h2>
                <p className="description">{item.description}</p>
                <button>Read More</button>
              </div>
            </li>
          ))}
        </ul>
        <nav className="nav">
          <button className="btn prev" onClick={handlePrevClick}>
            back
          </button>
          <button className="btn next" onClick={handleNextClick}>
            next
          </button>
        </nav>
      </main>
    </SectionLayout>
  );
};

export default Proyectos;
