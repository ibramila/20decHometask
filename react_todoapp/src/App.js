import React, { useState } from 'react';
import './App.css';

function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  // const [checked, setChecked] = useState(true);

  function addItem() {

    if (!newItem) {
      alert(" you entered an item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
    // console.log(items)

  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }
  return (
    <div className="div">
      <form onSubmit={(e) => {
        e.preventDefault();
        addItem();
      }}>
        <input
          id='input-form'
          type="text"
          placeholder='Add an Item...'
          value={newItem}
          // defaultChecked={checked}
          onChange={e => { setNewItem(e.target.value);/* setChecked(!checked)*/ }}
        />
        <button className='addBtn' onClick={(e) => addItem()}><i className='fa-solid fa-plus'></i></button>

      </form>
      <div className='container'>
        <ul>
          {items.map(item => {
            return <li key={item.id} /*defaultChecked={checked} */> {item.value} <button className='checkItem'> check</button> <button className='deleteItem' onClick={e => deleteItem(item.id)}>X</button>  </li>
          })}
        </ul>

      </div>
    </div>
  );
}

export default App;