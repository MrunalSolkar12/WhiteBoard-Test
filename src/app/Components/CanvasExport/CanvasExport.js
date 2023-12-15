import "./CanvasExport.css";

export const CanvasExport = ({CanvasRef}) => {

  const handleGetImage = (CanvasRef) => {
    CanvasRef.current
      .exportImage("png")
      .then(data => {
        const link = document.createElement("a");
        link.href=data;
        link.download='sketch.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
    <>
      <div className="card" style={{cursor:"default"}}>
        <div className="img" onClick={()=>{handleGetImage(CanvasRef)}}
            data-tooltip="Export board"
            data-flow="bottom"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="download-svg w-6 h-6"
            
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        </div>
        <div  className="ml-4 h-8 text-gray-600 hidden md:block">|</div>
       
        <div className="textBox ">
          <div className="textContent">
            <p className="h1">Web whiteboard</p>
          </div>
          <p className="p">Powered by Pixels</p>
          <div></div>
        </div>
      </div>
    </>
  );
};
