import React, { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

function App() {
  const [listItems, setListItems] = useState(["Build a to-do app", "Check an item"]);
  const handleSubmit = e => {
    const added = e.target.elements.whycantInamethisitem.value;
    setListItems(listItems.concat(added));
  };
  const handleRemove = item => {
    setListItems(listItems.filter(listItem => item !== listItem));
  };
  const handleChecked = item => {
    console.log(item);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Add <code>items</code> to this to-do list.
        </p>
      </header>
      <List
        listItems={listItems}
        setListItems={setListItems}
        handleRemove={handleRemove}
        handleChecked={handleChecked}
      />
      <AddItems handleSubmit={handleSubmit} />
    </div>
  );
}

function List(props) {
  return (
    <div>
      {props.listItems.length > 0 ? (
        <ul>
          {props.listItems.map((item, index) => {
            return (
              <ListItem
                handleCecked={props.handleChecked}
                handleRemove={props.handleRemove}
                key={item + index}
                content={item}
              />
            );
          })}
        </ul>
      ) : (
        <p> Add some stuff dude :) </p>
      )}
    </div>
  );
}
List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleRemove: PropTypes.func,
  handleChecked: PropTypes.func,
};

function ListItem(props) {
  const [checked, setChecked] = useState(false);
  return (
    <li>
      <p className={checked ? "strikethrough" : null}>
        {props.content}
        {checked && " ✅"}
      </p>
      <button
        onClick={() => {
          props.handleRemove(props.content);
        }}
      >
        Remove item
      </button>
      <button
        onClick={() => {
          setChecked(!checked);
        }}
      >
        Check item
      </button>
    </li>
  );
}
ListItem.propTypes = {
  content: PropTypes.string,
  handleRemove: PropTypes.func,
  handleChecked: PropTypes.func,
};

function AddItems(props) {
  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(e);
    e.target.elements.whycantInamethisitem.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="whycantInamethisitem" />
      <button type="submit"> Add item</button>
    </form>
  );
}
AddItems.propTypes = {
  handleSubmit: PropTypes.func,
};

export default App;
