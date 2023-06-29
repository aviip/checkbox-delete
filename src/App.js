import "./styles.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const arr = [
    { id: uuidv4(), text: "Play cricket" },
    { id: uuidv4(), text: "Play video game" },
    { id: uuidv4(), text: "Read book" }
  ];

  const [data, setData] = useState(arr);
  const [show, setShow] = useState({});

  const deleteData = (index) => {
    const updatedData = data.filter((item, id) => index !== id);
    setData(updatedData);
  };

  const changeHandler = (event) => {
    const { checked, name } = event.target;

    setShow((prevShow) => ({
      ...prevShow,
      [name]: checked
    }));
  };

  return (
    <div className="App">
      {data?.map((item, index) => {
        return (
          <div key={item.id}>
            <p>{item.text}</p>

            <input
              type="checkbox"
              onChange={changeHandler}
              name={item.text}
              value={item.text}
            />
            {show[item.text] && (
              <button onClick={() => deleteData(index)}>delete</button>
            )}
          </div>
        );
      })}
    </div>
  );
}
