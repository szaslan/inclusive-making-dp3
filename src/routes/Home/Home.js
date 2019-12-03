import React from "react";
import MakerspaceCard from "../../components/MakerspaceCard/MakerspaceCard";
import "./Home.css";
const Home = () => {
  return (
    <div className="homepage-background">
      <h1>Select a makerspace</h1>
      <MakerspaceCard
        route="/the-garage"
        name="The Garage"
        alt="The Garage"
        picture={`https://thegarage.northwestern.edu/wp-content/uploads/2016/04/The-Garage-at-Northwestern-University_030.jpg`}
        bio="The Garage is startup central at Northwestern. "
      />
    </div>
  );
};

export default Home;
