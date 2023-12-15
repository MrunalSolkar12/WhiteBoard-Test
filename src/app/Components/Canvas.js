"use client"
import { useRef, useEffect,useState } from 'react';
import Layout from './Layout';
import { UserContext } from "../Context/context";
import { useContext } from "react";

const Canvas = () => {


  const {state} = useContext(UserContext);
  console.log("undo canvas",state);

  //useRef
  const canvasRef = useRef(null);

  //useState
  const [drawingActions, setDrawingActions] = useState([]);
 // const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

   // Set canvas dimensions to match the viewport
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   canvas.Image="https://i.pinimg.com/564x/e7/3e/6d/e73e6dcb23084c4b47e2ec70ebd80438.jpg";
  
   // Initialize drawing variables
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let undoStack = [];
let redoStack = [];


// Set up event listeners
canvas.addEventListener("mousedown", (e) => {
    isDrawing=true;
    [lastX, lastY] = [e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => stopDrawing());
canvas.addEventListener("mouseout", () => stopDrawing());

// Drawing function
function draw(e) {
  if (!isDrawing) return;

  ctx.beginPath();
  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";

  // Start drawing from the last position
  ctx.moveTo(lastX, lastY);
  
  // Update the last position to the current position
  [lastX, lastY] = [e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop];
  
  // Draw a line to the current position
  ctx.lineTo(lastX, lastY);
  ctx.stroke();
  ctx.closePath();
}

// Function to stop drawing
function stopDrawing() {
  if (isDrawing) {
    ctx.closePath();
    isDrawing = false;
    undoStack.push(canvas.toDataURL()); // Save the current state
    redoStack.length = 0; // Clear the redo stack
  }
}


// Function to undo the last action
function undo() {
  if (undoStack.length > 1) {
    console.log("undo function called");
    redoStack.push(undoStack.pop()); // Pop the current state and save it in redo stack
    const lastState = new Image();
    lastState.src = undoStack[undoStack.length - 1];
    lastState.onload = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
      ctx.drawImage(lastState, 0, 0); // Draw the previous state
    };
  }
}

if(state.action == 'UNDO'){
  console.log("undo button is  clicked");
  undo();
}
else{
  console.log("undo button is not clicked");
}




}, [state]);

  return (
    <Layout> 
    <canvas className='canvas' ref={canvasRef} ></canvas>
    </Layout>
  );
};

export default Canvas;