import React from 'react';



const Filters = (props) => {

  const handleSearch = (ev) => {
    props.handleSearch({
      value: ev.target.value
    });
  }

  return (
    <form className="form">
      <input
        className="form__input"
        type="text"
        placeholder="Buscar personaje"
        onChange={handleSearch}
      />
    </form>
  );
}

export default Filters;
