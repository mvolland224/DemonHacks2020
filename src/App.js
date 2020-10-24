import "./App.css";
import React, { useEffect, useState } from "react";
import { useCombobox } from "downshift";
import { input } from "antd";

function App() {
  const [inputItems, setInputItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        users.filter((item) =>
          item.name.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    },
  });

  return (
  
    <div className="App">
    <div>
      <h2>Face The Art {singleUser}</h2>
      <button>Use Current Location</button>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps()}
          placeholder="Search"
          enterButton="Search"
          size="large"
        />
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <span
              key={item.id}
              {...getItemProps({ item, index })}
              onClick={() => setSingleUser(item.name)}
            >
              <li
                style={highlightedIndex === index ? { background: "#ede" } : {}}
              >
                <h4>{item.name}</h4>
              </li>
            </span>
          ))}
      </ul>
    </div>



      <div>
        <a className="AboutUs-link"
          href= "file:///C:/Users/madla/OneDrive/Desktop/DemonHacks2020/my-app/src/AboutUs.html" // add link here to about us page
          target="_blank"
          rel="noopener noreferrer"
        >
          About Us
        </a>

        <p>

        {"Don't see the art  you're looking for? Submit artwork"}

        </p>

        <a
            className="Submit-link"
            href= "https://reactjs.org/docs/cdn-links.html" // insert link to leticia's code
            target="_blank"
            rel= "noopener noreferrer"
        >
            here
        </a>
      </div>
      </div>

  );
}

export default App;
