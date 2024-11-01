
import React from 'react';
import '../Styles/Sidebar.css';

function Sidebar({ filters, onFilterChange }) {
  const handleCheckboxChange = (category, value) => {
    onFilterChange(category, value);
  };

  return (
    <div className="sidebar">
      <h3>Colour</h3>
      <label>
        <input
          type="checkbox"
          checked={filters.color.includes('Red')}
          onChange={() => handleCheckboxChange('color', 'Red')}
        /> Red
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.color.includes('Blue')}
          onChange={() => handleCheckboxChange('color', 'Blue')}
        /> Blue
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.color.includes('Green')}
          onChange={() => handleCheckboxChange('color', 'Green')}
        /> Green
      </label>

      <h3>Gender</h3>
      <label>
        <input
          type="checkbox"
          checked={filters.gender.includes('Men')}
          onChange={() => handleCheckboxChange('gender', 'Men')}
        /> Men
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.gender.includes('Women')}
          onChange={() => handleCheckboxChange('gender', 'Women')}
        /> Women
      </label>

      <h3>Price</h3>
      <label>
        <input
          type="checkbox"
          checked={filters.price.includes('0-Rs250')}
          onChange={() => handleCheckboxChange('price', '0-Rs250')}
        /> 0-Rs250
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.price.includes('Rs251-450')}
          onChange={() => handleCheckboxChange('price', 'Rs251-450')}
        /> Rs251-450
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.price.includes('Rs450')}
          onChange={() => handleCheckboxChange('price', 'Rs450')}
        /> Rs450
      </label>

      <h3>Type</h3>
      <label>
        <input
          type="checkbox"
          checked={filters.type.includes('Polo')}
          onChange={() => handleCheckboxChange('type', 'Polo')}
        /> Polo
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.type.includes('Hoodie')}
          onChange={() => handleCheckboxChange('type', 'Hoodie')}
        /> Hoodie
      </label>
      <label>
        <input
          type="checkbox"
          checked={filters.type.includes('Basic')}
          onChange={() => handleCheckboxChange('type', 'Basic')}
        /> Basic
      </label>
    </div>
  );
}

export default Sidebar;
