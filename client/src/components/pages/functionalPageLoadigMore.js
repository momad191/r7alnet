import React, { useEffect, useState } from "react";
 
import axios from "axios";
 

const About = () => {
  const [cardData, setCardData] = useState([]);
  const [visible, setVisible] = useState(5);

  const allCardData = async () => {
    const response = await axios.get('/api/posts/topics');
    setCardData(response.data);
  };

  const loadMore = () => {
    setVisible(visible + 5);
  };
 
  useEffect(() => {
    allCardData();
  }, []);

  const renderCard = (person, index) => {
    return (
      <div style={{ width: "18rem" }}>
        <img variant="top" src={person.image} />
        <div>
          <div>
           
          </div>
          <div>
            <ul>
              <li>{person.title}</li>
             
            </ul>
          </div>
        </div>
      </div>
    );
  };
 
  return (
    <div className="App">
      <div className="wrapper">
        <div className="cards">
          {cardData.slice(0, visible).map(renderCard)}
        </div>
      </div>
      {visible < cardData.length && (
        <button onClick={loadMore}>Load 5 More</button>
      )}
    </div>
  );
};

export default About;
