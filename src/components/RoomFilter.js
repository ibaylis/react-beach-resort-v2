import React from 'react';
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
// get all unique values

const getUnique = (items, value) => {
    return [ ...new Set(items.map(item => item[value])) ]
}

export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

//////// Get all the unique types //////////
let types = getUnique(rooms, 'type');

// add all
types = ['all', ...types];

// map to jsx
types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>
})
//////// end types //////////
//////// Get all people //////////
let people = getUnique(rooms, 'capacity');
people = people.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
})
//////// end people //////////

    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">

                {/* Select Type */}
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select 
                        name="type" 
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange} 
                    >
                        {types}
                    </select>
                </div>
                {/* end select type */}

                {/* Select Guests */}
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select 
                        name="capacity" 
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange} 
                    >
                        {people}
                    </select>
                </div>
                {/* end select guests */}
                {/* Select Room Price */}
                <div className="form-group">
                    <label htmlFor="price">
                        room price ${price}
                    </label>
                    <input 
                        type="range"
                        name="price"
                        min={minPrice}
                        max={maxPrice}
                        id="price"
                        value={price}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                {/* End of Room Price */}
            </form>
        </section>
    )
}