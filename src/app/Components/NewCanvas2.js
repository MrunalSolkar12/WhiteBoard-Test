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
import { ShareBoard } from "./ShareBoard/ShareBoard";
import { GithubPicker, TwitterPicker, SketchPicker } from "react-color";
import { SignupPage } from "./Signup/SignupPage";
import { Emojis } from "./Emojis/Emojis";
import { ReactionModal } from "./ReactionModal/ReactionModal";
import { FeedbackPage } from "./Feedback/FeedbackPage";

export const NewCanvas2 = () => {
  const [isEraserMode, setEraserMode] = useState(false);
  const [isConfetti, setConfetti] = useState(false);
  const [strokeColors, setStrokeColors] = useState("red");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [displayGithubColorPicker, setDisplayGithubColorPicker] = useState(false);
  const [color, setColor] = useState("#F30707");
  const [isStrokeWidth, setStrokeWidth] = useState(2);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [isEmojis, setEmojis] = useState(false);
  const [isReactionModal, setReactionModal] = useState(false);
  const [changeEmoji, setChangeEmoji] = useState("");
  const [openFeedBack, setOpenFeedBack] = useState(false);
  const [loginPicture, setLoginPicture] = useState(null);

  const CanvasRef = useRef(null);
  const colorRef = useRef(null);
  const githubcolorref = useRef(null);
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

  const handleChangeComplete = (newColor) => {
    setColor(newColor.hex);
    setStrokeColors(newColor.hex);
  };

  const handleChangeGithubComplete = (newColor) => {
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
    const handleOutsideClick = (event) => {
      //console.log("2:::",event.target);
      //console.log("1::",colorRef.current.contains(event.target));
      if (githubcolorref.current && !githubcolorref.current.contains(event.target)) {
        setDisplayGithubColorPicker(false);
      }
    };

    if (displayGithubColorPicker) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [displayGithubColorPicker]);


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
      document.removeEventListener(
        "mousedown",
        handleOutsideReactionModalClick
      );
    };
  }, [isReactionModal]);

  
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

  //const canvasWidth = typeof window !== "undefined" ? window.innerWidth : 10000;
  //const canvasHeight = typeof window !== "undefined" ? window.innerHeight : 10000;

  const canvasWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const  canvasHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  //console.log("1", window.innerWidth);
  //console.log("2", window.innerHeight);

  return (
    <>
      <div className="sketchcanvas">
        <ReactSketchCanvas
          ref={CanvasRef}
          width={canvasWidth}
          height={canvasHeight}
          strokeWidth={isEraserMode ? 20 : isStrokeWidth} // Adjust strokeWidth for eraser mode
          strokeColor={isEraserMode ? "#FDFDFF" : strokeColors} // Set stroke color to white for eraser mode
          onMouseDown={false}
          canvasColor="#FDFDFF"
          eraserWidth="30"
        />

        <div className="canvas_export">
          <CanvasExport CanvasRef={CanvasRef} />
        </div>

        <div className="signup-container">
          <Signup
            setOpenSignUp={setOpenSignUp}
            changeLoginPicture={setLoginPicture}
          />
        </div>

        <div className="share-container">
          <ShareBoard
            setConfetti={setConfetti}
            setReactionModal={setReactionModal}
            loginPicture={loginPicture}
          />
        </div>

        <div>
          <SideBar
            color={color}
            setDisplayColorPicker={setDisplayColorPicker}
            setDisplayGithubColorPicker={setDisplayGithubColorPicker}
            setStrokeColors={setStrokeColors}
            setEraserMode={setEraserMode}
            toggleUndoMode={toggleUndoMode}
            toggleRedoMode={toggleRedoMode}
            setStrokeWidth={setStrokeWidth}
          />
        </div>

        <div className="feedback-container">
          <FeedBack setOpenFeedBack={setOpenFeedBack} />
        </div>

        {openSignUp && (
          <div className="signuppage-container">
            <SignupPage
              AfterGoogleLogin={setOpenSignUp}
              setLoginPicture={setLoginPicture}
            />
          </div>
        )}

        {openFeedBack && (
          <div className="feedbackPage-container">
            <FeedbackPage setOpenFeedBack={setOpenFeedBack} />
          </div>
        )}

        {isReactionModal && (
          <div ref={emojiRef} className="reaction-container" style={{ cursor: "default" }}>
            <ReactionModal
              setEmojis={setEmojis}
              setChangeEmoji={setChangeEmoji}
            />
          </div>
        )}

        {isEmojis && <div className="emoji-container"><Emojis changeEmoji={changeEmoji}/> </div>}

        {displayColorPicker && (
            <div ref={colorRef} className="colorpicker-container" style={{cursor:"default"}}>
              <SketchPicker
               
                color={color}
                onChange={handleChangeComplete}
              />
            </div>
        )}


{displayGithubColorPicker && (
            <div ref={githubcolorref} className="githubcolorpicker-container" style={{cursor:"default"}}>
              <GithubPicker
               color={color}
                onChange={handleChangeGithubComplete}
              />
            </div>
        )}

        
      </div>
    </>
  );
};
