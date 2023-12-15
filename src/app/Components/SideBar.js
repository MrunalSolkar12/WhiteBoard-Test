"use client";
import { useState, useRef } from "react";
import { UserContext } from "../Context/context";
import { useContext } from "react";
import Image from "next/image";
import "./Sidebar.css";

export default function SideBar({
  color,
  setDisplayColorPicker,
  setDisplayGithubColorPicker,
  setStrokeColors,
  setEraserMode,
  toggleUndoMode,
  toggleRedoMode,
  setStrokeWidth
}) {
  

  const [selectedPenCircle, setSelectedPenCircle] = useState(null); 

  var colorRef = useRef(null);
 console.log("color :::",color);
  
  function handleClickArrow() {
    document.body.style.cursor = "pointer";
    setEraserMode(true);
  }

  function handleClickPen() {
    // document.body.style.cursor = `url("https://cdn-icons-png.flaticon.com/128/483/483907.png") , auto`;
    document.body.style.cursor =
      "url(https://i.ibb.co/brhhfs6/pencil20x20.png) 0 20,auto";
    var element = document.getElementById("PenSidebar");
    element.style.display = "block";
    console.log(element);

    //document.style.cursor.width="10px";
    //document.style.height="10px"
    //document.body.style.cursor = "grab";
    //dispatch({ type: "USER", payload: true });
    setEraserMode(false);
  }

  function CancelPenContainer() {
    var element = document.getElementById("PenSidebar");
    element.style.display = "none";
  }

  function handleClickEraser() {
    document.body.style.cursor ="url(https://i.ibb.co/kyV4Npc/eraser20x20.png) 0 20,auto";
    setEraserMode(true);
  }

  function handleClickText() {
    document.body.style.cursor = "text";
  }

  function setPenColor(width,index){
    setDisplayColorPicker(true);
    setDisplayGithubColorPicker(true);
    setStrokeWidth(width);
    setSelectedPenCircle(index);
  
}




  return (
    <>
      <div>
        <div className="sidebar-container" style={{cursor:"default"}}>
          <ul>
            <li>
              <button
                data-tooltip="Select"
                data-flow="right"
                onClick={handleClickArrow}  
                className="side-button"
              >
                <Image
                  src="/images/cursor.png" // Path to your logo image in the "public" directory
                  alt="cursor"
                  width={25} // Specify the desired width
                  height={25} // Specify the desired height
                />
              </button>
            </li>
            <li>
              <button
                data-tooltip="Pen"
                data-flow="right"
                onClick={handleClickPen}
                className="side-button "
                id="Pen"
              >
                <Image
                  src="/images/pencil.png" // Path to your logo image in the "public" directory
                  alt="shapes"
                  width={25} // Specify the desired width
                  height={25} // Specify the desired height
                />
              </button>
            </li>
            <li>
              <button
                data-tooltip="Eraser"
                data-flow="right"
                onClick={handleClickEraser}
                className="side-button "
              >
                <Image
                  src="/images/eraser.png" // Path to your logo image in the "public" directory
                  alt="shapes"
                  width={25} // Specify the desired width
                  height={25} // Specify the desired height
                />
              </button>
            </li>
            <li>
              <button
                data-tooltip="Text"
                data-flow="right"
                onClick={handleClickText}
                className="side-button"
              >
                <Image
                  src="/images/font.png" // Path to your logo image in the "public" directory
                  alt="shapes"
                  width={30} // Specify the desired width
                  height={30} // Specify the desired height
                />
              </button>
            </li>
          </ul>
        </div>

        <div className="sidebar2-container mt-10" style={{cursor:"default"}}>
          <ul>
            <li>
              <button
                data-tooltip="Undo"
                data-flow="right"
                onClick={toggleUndoMode}
                className="side-button"
              >
                <Image
                  src="/images/undo.png" // Path to your logo image in the "public" directory
                  alt="shapes"
                  width={25} // Specify the desired width
                  height={25} // Specify the desired height
                />
              </button>
            </li>
            <li>
              <button
                data-tooltip="Redo"
                data-flow="right"
                onClick={toggleRedoMode}
                className="side-button"
              >
                <Image
                  src="/images/redo.png" // Path to your logo image in the "public" directory
                  alt="shapes"
                  width={25} // Specify the desired width
                  height={25} // Specify the desired height
                />
              </button>
            </li>
          </ul>
        </div>

        <div className="pensidebar-container" id="PenSidebar" style={{cursor:"default"}}>
          <ul>
            <li className="pen-container">
              <button className="ml-1 " onClick={CancelPenContainer}>
                <Image
                  src="/images/cross.png" // Path to your logo image in the "public" directory
                  alt="shapes"
                  width={30} // Specify the desired width
                  height={30} // Speci  fy the desired height
                />
              </button>
            </li>
            <li>
              <button className="pen-circle1" ref={colorRef} onClick={()=>{setPenColor(2,1)}}>
                <div className="pen-color1"  style={{ backgroundColor: selectedPenCircle === 1 ? color : "red" }}></div>
              </button>
            </li>

            <li>
              <button className="pen-circle2" onClick={()=>{setPenColor(7,2)}}>
                <div className="pen-color2" style={{  backgroundColor: selectedPenCircle === 2 ? color : "green" }}></div>
              </button>
            </li>

            <li>
              <button className="pen-circle3" onClick={()=>{setPenColor(10,3)}}>
                <div className="pen-color3" style={{  backgroundColor: selectedPenCircle === 3 ? color : "blue" }}></div>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
