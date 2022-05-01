import '../styles/SearchField.scss';
const SearchField = (props) => {
  const filterInput = (ev) => {
    ev.preventDefault();
    props.handleSearchInput(ev.currentTarget.value);
  };

  return (
    <form className = "main__form">
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
SearchField.defaultProps = {
  inputType: 'text',
  require: false,
};
export default SearchField;