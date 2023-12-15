"use client";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import SideBar from "./SideBar";
import { FeedBack } from "./Feedback/feedback";
import { Signup } from "./Signup/Signup";
import { CanvasExport } from "./CanvasExport/CanvasExport";
import { UserContext } from "../Context/context";
import { useContext } from "react";
import Layout from "./Layout";
import { GraphPaper } from "./GraphPaper/GraphPaper";
import { ShareBoard } from "./ShareBoard/ShareBoard";
import { GithubPicker, TwitterPicker, SketchPicker } from "react-color";
import { SignupPage } from "./Signup/SignupPage";
import { Emojis } from "./Emojis/Emojis";
import { ReactionModal } from "./ReactionModal/ReactionModal";
import { FeedbackPage } from "./Feedback/FeedbackPage";





export const NewCanvas = () => {
  const [isEraserMode, setEraserMode] = useState(false);
  const [isConfetti, setConfetti] = useState(false);
  const [strokeColors, setStrokeColors] = useState("red");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState("#F30707");
  const [isStrokeWidth, setStrokeWidth] = useState(2);
  const [openSignUp,setOpenSignUp] = useState(false);
  const [isEmojis,setEmojis] = useState(false);
  const [isReactionModal,setReactionModal] = useState(false);
  const [changeEmoji,setChangeEmoji] = useState("");
  const [openFeedBack,setOpenFeedBack] = useState(false);
  const [loginPicture,setLoginPicture] = useState(null);
  

  const CanvasRef = useRef(null);
  const colorRef = useRef(null);
  const emojiRef = useRef(null);


  const toggleUndoMode = () => {
    console.log("Undo button clicked");
    if (CanvasRef.current) {
      CanvasRef.current.undo();
    }
  };

  const toggleRedoMode = () => {
    console.log("Redo button clicked");
    if (CanvasRef.current) {
      CanvasRef.current.redo();
    }
  };

  const handleChangeComplete = (newColor) =>{
    setColor(newColor.hex);
    setStrokeColors(newColor.hex);
  };

  // USEEFFECT IS USED TO  COLOR PALETTE WHEN CLICKED OUTSIDE OF IT.
  useEffect(() => {
    const handleOutsideClick = (event) => {
      //console.log("2:::",event.target);
      //console.log("1::",colorRef.current.contains(event.target));
      if (colorRef.current && !colorRef.current.contains(event.target)) {
        setDisplayColorPicker(false);
        
      }
    };

    if (displayColorPicker) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [displayColorPicker]);



  useEffect(() => {
    const handleOutsideReactionModalClick = (event) => {
      //console.log("2:::",event.target);
      //console.log("1::",colorRef.current.contains(event.target));
      if (emojiRef.current && !emojiRef.current.contains(event.target)) {
        setReactionModal(false);
        
      }
    };

    if (isReactionModal) {
      document.addEventListener("mousedown", handleOutsideReactionModalClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideReactionModalClick);
    };
  }, [isReactionModal]);

/*
  //Right Click is no allowed.
  useEffect(() => {
    const preventContextMenu = (e) => {
      e.preventDefault();
      //alert("Right-clicking is disabled on this page.");
    };

    const preventInspect = () => {
      if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {
        //alert("Inspect element is disabled on this page.");
      }
    };

    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('keydown', preventInspect);

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('keydown', preventInspect);
    };
  }, []);

*/
  //console.log("isReactionModal", isReactionModal);

  //const { state } = useContext(UserContext);
  //console.log("canvas pencil", state);

  const canvasWidth = typeof window !== 'undefined' ? window.innerWidth : 1100;
  const canvasHeight = typeof window !== 'undefined' ? window.innerHeight : 600;

  console.log("1",window.innerWidth);
  console.log("2",window.innerHeight);

  return (
    <>
      <Layout>
        <div style={{ position: "relative" }}>
          <ReactSketchCanvas
            ref={CanvasRef}
            
            width={canvasWidth}
            height={canvasHeight}
            strokeWidth={isEraserMode ? 20 : isStrokeWidth} // Adjust strokeWidth for eraser mode
            strokeColor={isEraserMode ? "#F7F7F7" : strokeColors} // Set stroke color to white for eraser mode
            onMouseDown={false}
            canvasColor="#F7F7F7"
            eraserWidth="30"
            
            //backgroundImage="https://upload.wikimedia.org/wikipedia/commons/7/70/Graph_paper_scan_1600x1000_%286509259561%29.jpg"
          />
        </div>
        <div style={{ position: "absolute", top: 0, left: 0 }}>
          <Signup setOpenSignUp={setOpenSignUp} changeLoginPicture={setLoginPicture}/>
          
          <CanvasExport CanvasRef={CanvasRef} />
          <ShareBoard setConfetti={setConfetti} setReactionModal={setReactionModal} loginPicture={loginPicture} />
          <SideBar
            color={color}
            setDisplayColorPicker={setDisplayColorPicker}
            setStrokeColors={setStrokeColors}
            setEraserMode={setEraserMode}
            toggleUndoMode={toggleUndoMode}
            toggleRedoMode={toggleRedoMode}
            setStrokeWidth={setStrokeWidth}
          />
          <FeedBack  setOpenFeedBack={setOpenFeedBack}/>
          { openSignUp &&
              <SignupPage AfterGoogleLogin={setOpenSignUp} setLoginPicture={setLoginPicture}/>
          }

          { openFeedBack &&
            <FeedbackPage setOpenFeedBack={setOpenFeedBack}/>
          }
          {isConfetti ? <GraphPaper /> : ""}
          {isReactionModal && (<div ref={emojiRef} style={{cursor:"default"}}><ReactionModal setEmojis={setEmojis} setChangeEmoji={setChangeEmoji}/></div>)}
          { isEmojis && <Emojis changeEmoji={changeEmoji}/>  }
          {displayColorPicker && (
            <div ref={colorRef} style={{cursor:"default"}}>
              <SketchPicker
                className="sketchpicker"
                color={color}
                onChange={handleChangeComplete}
              />
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};
