import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [
    ...Array(length)
];

function Star({ selected = false, onSelect }) {
    return <FaStar color={selected ? "gold" : "#ccc"} onClick={onSelect} />;
};

const Rating = ({ totalStars = 5}) => {
    const [selectedStars, setSelectedStars] = useState(0);
    return (
      <>
        {   createArray(totalStars).map((s, i) => (
                <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
            ))
        }
        <p>Rating is {selectedStars} from { totalStars }</p>
      </>
    );
};

export default Rating;