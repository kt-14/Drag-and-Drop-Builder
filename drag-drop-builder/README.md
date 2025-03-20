# Drag-and-Drop Website Builder  

## Overview  
This project is a **React-based drag-and-drop website builder** that allows users to dynamically add and arrange elements like text blocks and buttons on a canvas. It provides a user-friendly interface for designing basic web layouts.  

---

## Features  
**Drag and Drop** – Rearrange elements on the canvas with smooth interactions.  
**Add Elements** – Users can add **Text Blocks** and **Buttons** dynamically.  
**Edit & Delete Elements** – Modify content or remove elements as needed.  
**Responsive Design** – Optimized for both **desktop and mobile views**.  
**State Management** – Uses React’s `useState` for handling element updates.  

---

## Architecture  

### 1. Components Structure 
```sh
/src
│── components
│   ├── Canvas.jsx # Renders the draggable elements
│   ├── ElementForm.jsx # Handles element editing
│── App.jsx # Main entry point managing state
│── App.css # Styling for layout and responsiveness
```

### 2. Tools & Libraries Used  
- **React** – Component-based UI framework.  
- **React Hooks (`useState`)** – Manages elements dynamically.  
- **HTML5 Drag-and-Drop API** – Handles drag-and-drop interactions.  
- **CSS Flexbox & Media Queries** – Ensures responsiveness.  

---

## Installation & Setup  

### 1. Clone the Repository  
```sh
git clone https://github.com/your-repo/drag-drop-builder.git
cd drag-drop-builder
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the Application
```sh
npm run dev
```

---

## Usage Instructions
- Click the "Add Text Block" or "Add Button" to insert elements.
- Drag and drop elements within the canvas to rearrange them.
- Click on an element to edit its content using the Element Form.
- Click "Delete" to remove an element from the canvas.

---

## How Drag-and-Drop Works
The app implements manual drag-and-drop handling using the HTML5 Drag-and-Drop API in React:
- onDragStart – Saves element data when dragging begins.
- onDragOver – Prevents default behavior to allow dropping.
- onDrop – Updates the element order in the state.
- onDragEnd – Handles cleanup after the operation.

---

## Future Enhancements
- Implement react-beautiful-dnd for smoother drag-and-drop
- Allow saving layouts for later use.
- Add custom styling options for text blocks and buttons.
