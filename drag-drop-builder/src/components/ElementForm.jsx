import React, { useState } from 'react';

const ElementForm = ({ element, onUpdate, onDelete }) => {
  const [content, setContent] = useState(element.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...element, content });
  };

  const handleDelete = () => {
    onDelete(element.id); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Content:
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </label>
      <button type="submit">Update</button>
      <button type="button" onClick={handleDelete}>Delete</button> 
    </form>
  );
};

export default ElementForm;