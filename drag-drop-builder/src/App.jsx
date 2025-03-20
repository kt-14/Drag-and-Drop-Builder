import React, { useState } from 'react';
import Canvas from './components/Canvas.jsx';
import ElementForm from './components/ElementForm.jsx';
import './App.css';

const App = () => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const handleDrop = (result) => {
    if (!result.destination) return;
    const reorderedElements = Array.from(elements);
    const [removed] = reorderedElements.splice(result.source.index, 1);
    reorderedElements.splice(result.destination.index, 0, removed);
    setElements(reorderedElements);
  };

  const handleUpdateElement = (updatedElement) => {
    const updatedElements = elements.map((el) =>
      el.id === updatedElement.id ? updatedElement : el
    );
    setElements(updatedElements);
    setSelectedElement(null);
  };

  const addElement = (type) => {
    const newElement = {
      id: Date.now().toString(),
      type,
      content: type === 'text' ? 'New Text Block' : 'New Button',
    };
    setElements([...elements, newElement]);
  };

  const deleteElement = (id) => {
    const updatedElements = elements.filter((el) => el.id !== id);
    setElements(updatedElements);
    setSelectedElement(null); 
  };

  return (
    <div className="app-container">
      <h1>Drag-and-Drop Website Builder</h1>
      <div className="canvasArea">
        <div className="toolbar">
          <button onClick={() => addElement('text')}>Add Text Block</button>
          <button onClick={() => addElement('button')}>Add Button</button>
        </div>
        <div className="main-content">
          <Canvas elements={elements} onDrop={handleDrop} setSelectedElement={setSelectedElement} />
          {selectedElement && (
            <ElementForm
              element={selectedElement}
              onUpdate={handleUpdateElement}
              onDelete={deleteElement}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;