import React, { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

function App() {
  const [listItems, setListItems] = useState(["test", "test2"]);
  const handleSubmit = e => {
    e.preventDefault();
    const added = e.target.elements.whycantInamethisitem.value;
    setListItems(listItems.concat(added));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <List listItems={listItems} setListItems={setListItems} />
      <AddItems handleSubmit={handleSubmit} />
    </div>
  );
}

function List(props) {
  return (
    <div>
      {props.listItems &&
        props.listItems.map((item, index) => {
          return <ListItem key={item + index} content={item} />;
        })}
    </div>
  );
}
List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  greeting: PropTypes.string,
};
List.defaultProps = {
  greeting: "Hello",
};

function ListItem(props) {
  return (
    <div>
      <p>{props.content}</p>
    </div>
  );
}
ListItem.propTypes = {
  content: PropTypes.string,
};

function AddItems(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" name="whycantInamethisitem" />
      <button type="submit"> Add item</button>
    </form>
  );
}
AddItems.propTypes = {
  handleSubmit: PropTypes.func,
};

export default App;
