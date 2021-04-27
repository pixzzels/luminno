import { NavLink } from 'react-router-dom';

import './Category.css'

function Category({ category }) {

  return (
    <NavLink className="category-navLink" key={category.name} to={`category/${category.id}`}>
      {category.name}
    </NavLink>
  )
}

export default Category;