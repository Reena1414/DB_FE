import React, { useState, useEffect } from "react";
import { findData } from "../../services/DropdownServices";
import styles from "./Dropdown.module.scss";


export const Dropdown = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
        findData()
                .then(({data}) => {
                setData(data);
                });
        }, []);
  
    const handleSearch = (event) => {
      setSearch(event.target.value);
    };
    // Filter function
    const filteredData= data.filter((dt) =>
      dt.Type.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div className='dropdown' >
        <select value={search} onChange={handleSearch}>
          <option value='type1'>type1</option>
          <option value='type2'>type2</option>
        </select>
        {filteredData}
      </div>
    );
  };