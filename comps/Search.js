import React from "react";
import { useState } from "react";

const Search = () => {
    const [input, setInput] = useState("");

    const fetchData = ((value) => {
        fetch(/**********/)
        .then((response) => {
            return response.json;
        })
        .then((data) => {
            const result = data.filter((imposter) => {
                return (
                    value &&
                    imposter &&
                    imposter.name &&
                    imposter.name.toLowercase().includes(value)
                ); //search by name???
            });
        //do something with the result
        //new page
        });
    });

    const handleChange = ((value) => {
        setInput(value);
        fetchData(value);
    });

    return (
        <div className="search">
            
            <input
                type="text"
                placeholder='חפש לפי שם'
                value={ input }
                onChange={(e) => {handleChange(e.target.value)}} //need to add a button with onClick and not this
                //need to add label tag??
            />
            <br/>
            <input
                type="text"
                placeholder='חפש לפי לינק'
                value={ input }
                onChange={(e) => {handleChange(e.target.value)}} //need to add a button with onClick and not this
            />
        </div>
    );
}
 
export default Search;