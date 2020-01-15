import React from 'react';



const Filters = (props) => {

  const handleSearch = (ev) => {
    props.handleSearch({
      valueInput: ev.target.value
    });
  }

  const handleClick = (ev) => {
    props.handleClick({
      valueRadio: ev.target.value
    })
  }

  const handleCheck = (ev) => {
    props.handleCheck({
      valueCheck: ev.target.checked
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form__input"
        type="text"
        placeholder="Buscar personaje"
        value={props.searchInput}
        onChange={handleSearch}
      />
      <div className="form--radio">
        <label htmlFor="all" className="form--radio__label">Todos</label>
        <input
          id="all"
          type="radio"
          value="all"
          name="gender"
          defaultChecked={props.searchRadio === 'all'}
          onClick={handleClick}
        />
        <label htmlFor="Male" className="form--radio__label">Masculino</label>
        <input
          id="Male"
          type="radio"
          value="Male"
          name="gender"
          defaultChecked={props.searchRadio === 'Male'}
          onClick={handleClick}
        />
        <label htmlFor="Female" className="form--radio__label">Femenino</label>
        <input
          id="Female"
          type="radio"
          value="Female"
          name="gender"
          defaultChecked={props.searchRadio === 'Female'}
          onClick={handleClick}

        />
        <label htmlFor="unknown" className="form--radio__label">Desconocido</label>
        <input
          id="unknown"
          type="radio"
          value="unknown"
          name="gender"
          defaultChecked={props.searchRadio === 'unknown'}
          onClick={handleClick}

        />
        <label htmlFor="location" className="form--radio__label">viven=origen</label>
        <input
          id="location"
          type="checkbox"
          value="location"
          name="location"
          defaultChecked={props.searchCheck}
          onClick={handleCheck}

        />

      </div>
    </form>
  );
}

export default Filters;
