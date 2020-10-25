import "./App.css";
import React, { useEffect, useState } from "react";
import { useCombobox } from "downshift";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
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

    const containerStyle = {
        width: '400px',
        height: '400px'
    };

    const center = {
        lat: 41.881832,
        lng: -87.623177
    };
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

  return (
    <div className="App">
      <div>
        <h2>Face The Art: {singleUser}</h2>
        <div {...getComboboxProps()}>
          <input
            {...getInputProps()}
            placeholder="Find artist..."
            enterButton="Find artist..."
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
<<<<<<< HEAD
                <li
                  style={
                    highlightedIndex === index ? { background: "#ede" } : {}
                  }
                >
                  <h4>{item.name}</h4>
                </li>
              </span>
            ))}
        </ul>
      </div>
=======
                <h4>{item.name}</h4>
              </li>
            </span>
          ))}
      </ul>
    </div>

          <LoadScript
              googleMapsApiKey="AIzaSyBjUeyVDt2UWywo5CG9qxnbvKSOnMtZiec"
          >
              <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={10}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
              >
                  { /* Child components, such as markers, info windows, etc. */}
                  <></>
              </GoogleMap>
          </LoadScript>


>>>>>>> origin/master

      <div>
        <a
          className="AboutUs-link"
          href="file:///C:/Users/madla/OneDrive/Desktop/DemonHacks2020/my-app/src/AboutUs.html" // add link here to about us page
          target="_blank"
          rel="noopener noreferrer"
        >
          About Us
        </a>

        <p>{"Don't see the art  you're looking for? Submit artwork"}</p>
        <UserForm></UserForm>

        <a
          className="Submit-link"
          href="https://reactjs.org/docs/cdn-links.html" // insert link to leticia's code
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
      </div>
    </div>
  );
}

export function UserForm() {
  const [picSeen, setPicSeen] = useState("");
  const [desPic, setDesPic] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Thanks for your submission.");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Submit picture here.</label>

          <input
            value={picSeen}
            onChange={(e) => setPicSeen(e.target.value)}
            type="text"
            placeholder="Dropbox"
          ></input>
        </div>
        <div>
          <label>Any other information?</label>

          <textarea
            value={desPic}
            onChange={(e) => setDesPic(e.target.value)}
            id="info"
            rows="15"
            cols="40"
            placeholder="Artist name, Location, description, etc."
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
