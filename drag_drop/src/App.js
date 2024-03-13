import React, { useState } from 'react';

const App = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDrop = (e, newIndex) => {
    const oldIndex = e.dataTransfer.getData('index');
    const newItems = [...items];
    const [removed] = newItems.splice(oldIndex, 1);
    newItems.splice(newIndex, 0, removed);
    setItems(newItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className='App'>
      <h1>Drag And Drop Tasks</h1>
      <div className="item-list">
        {items.map((item, index) => (
          <div
            key={item}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
            className="item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
