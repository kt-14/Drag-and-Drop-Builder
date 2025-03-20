// src/components/Canvas.jsx
import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const Canvas = ({ elements, onDrop, setSelectedElement }) => {
  return (
    <DragDropContext onDragEnd={onDrop}>
      <Droppable droppableId="canvas">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="canvas"
          >
            {elements.map((element, index) => (
              <Draggable key={element.id} draggableId={element.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="draggable"
                    onClick={() => setSelectedElement(element)}
                  >
                    {element.type === 'text' ? (
                      <p>{element.content}</p>
                    ) : (
                      <button>{element.content}</button>
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Canvas;