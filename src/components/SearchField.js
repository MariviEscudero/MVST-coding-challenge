import '../styles/SearchField.scss';
const SearchField = (props) => {
  //lifting the input value
  const filterInput = (ev) => {
    ev.preventDefault();
    props.handleSearchInput(ev.currentTarget.value);
  };
  //rendering of the component
  return (
    <form className="main__form">
      <label className="main__form--label" htmlFor={props.name}>
        Repository Name
      </label>
      <input
        className="main__form--input"
        name="nameinput"
        id="nameinput"
        placeholder="Find a repository..."
        value={props.inputValue}
        onChange={filterInput}
      />
    </form>
  );
};

//props values for constant props not defined in the component

SearchField.defaultProps = {
  inputType: 'text',
  require: false,
};
export default SearchField;
