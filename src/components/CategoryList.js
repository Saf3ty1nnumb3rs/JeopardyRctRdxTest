import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = (props) => {

  const renderCats = () => {
    return (
      props.categories.map((category) => {
        return (
          <Link to="/category"><h4>{category.title}</h4></Link>
        )
      })
    )
  }
  return (
    <div>
      {renderCats()}
    </div>
  );
};

export default CategoryList;