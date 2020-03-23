import React from "react";

const SearchBox = ({ searchfield, schange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={schange}
      />
    </div>
  );
};

export default SearchBox;
