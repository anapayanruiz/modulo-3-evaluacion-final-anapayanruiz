import React from 'react';



const Filters = (props) => {

  function handleChange(ev) {
    props.handleChange({
      value: ev.target.value
    });
  }

  return (
    <form>
      <input
        className="form__input-text"
        type="text"
        placeholder="Buscar personaje"
        onChange={handleChange}
      />
    </form>
  );
}

export default Filters;
