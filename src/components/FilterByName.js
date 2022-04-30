//import '../styles/FilterByName.scss';
const FilterByName = (props) => {
  const filterInput = (ev) => {
    ev.preventDefault();
    props.handleSearchInput(ev.currentTarget.value);
  };
  return (
    <div>
      <label className="main__form--label" htmlFor={props.name}>
        Name
      </label>
      <input className = "main__form--input"
        name="nameinput"
        id="nameinput"
        placeholder={props.placeHolder}
        value={props.inputValue}
        onChange={filterInput}
      />
    </div>
  );
};
FilterByName.defaultProps = {
  inputType: 'text',
  require: false,
};
export default FilterByName;
