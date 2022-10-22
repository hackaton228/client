import React from "react";
import { Link } from "react-router-dom";
import "./searchField.scss";

const SearchField = ({value, ...onChange}) => {
  return (
		<div className="s-field__box">
      <input {...onChange} type="text" className="s-filed_input"/>
			<Link to={value}>
        <div className="s-field_button"/>
      </Link>
		</div>
  );
};

export default SearchField;
