import React, { useState } from "react";
import { cardDetails } from "../constants/data";
import CardComponent from "./CardComponent";
import SearchInput from "./SearchInput";

const CardContainer = () => {
  const [searchInput, setSearchInput] = useState("");
  const [places, setPlaces] = useState(cardDetails);
  const[filterPlaces,setFilterPlaces] = useState(cardDetails)
  const [error, setError] = useState('')
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const filterCards = () => {
    const filteredPlaces = places.filter((place) => {
      return place.title.toLowerCase().includes(searchInput.toLowerCase());
    });
  
    if (filteredPlaces.length === 0) {
      setFilterPlaces(cardDetails); // Show all places if no results found
      setError("No results found");
    } else {
      setFilterPlaces(filteredPlaces); // Show filtered results
      setError(""); // Clear any previous error
    }
  
  };
  return (
    <div className="min-h-screen min-w-screen">
      <SearchInput
        searchInput={searchInput}
        handleChange={handleChange}
        filterCards={filterCards}
        error={error}
      />
      <div className="grid lg:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8">
        {filterPlaces.map((item) => (
          <CardComponent
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            price={item.price}
            stay={item.stay}
            pickup={item.pickup}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
