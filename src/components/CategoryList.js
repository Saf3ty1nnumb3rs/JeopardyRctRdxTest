import React from 'react';
import { Link } from 'react-router-dom';

const CategoryList = (props) => {

  const renderCats = () => {
    return (
      props.categories.map((category) => {
        return (
          <Link to="/category" onClick={() => props.pickCategory(category)} key={category.title}><h4 className="capitalize">{category.title}</h4></Link>
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