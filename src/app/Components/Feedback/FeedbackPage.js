import Image from "next/image";
import { FeedbackLoader } from "./FeedbackLoader";
import { useState,useEffect } from "react";



export function FeedbackPage({setOpenFeedBack}) {

  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  },[])
  return (
    <>

   
      <div
        className="h-screen w-screen bg-white-900 " 
        style={{ cursor: "default"}}
      >
        <div className="grid place-items-center backdrop-blur-sm top-0 right-0 left-0 z-50 w-full inset-0 h-modal h-full justify-center items-center">
          <div className="relative container m-auto px-6 ">
           {/*Main Data start */}
            <div className="m-auto  md:w-11/12 ">
           
              <div className="  rounded-xl bg-white dark:bg-gray-800 shadow-2xl">
              {
                loading ? <FeedbackLoader/> :
              (
                <div>
                <div className="p-16 flex flex-col items-center justify-center">
                  <Image
                    src="/images/illustrate.png" // Path to your logo image in the "public" directory
                    alt="shapes"
                    width={350} // Specify the desired width
                    height={350} // Specify the desired height
                  />
                  <h1 className="font-medium text-3xl text-center">
                    Thank you for giving us feedback so we can make Web
                    whiteboard better
                  </h1>
                </div>

                <div className="flex items-center bg-gray-900 p-4 rounded-md max-w-xl mx-auto">
                  <span className="text-green-500">&gt;</span>
                  <input
                    type="text"
                    className="bg-gray-900 text-white p-0.5 outline-none ml-2 w-3/4"
                    placeholder="Type your command here"
                  />
                  <button
                    className="text-white ml-16 bg-indigo-900 py-1 px-2 rounded-md"
                    onClick={() => console.log("clicked")}
                  >
                    Submit
                  </button>
                </div>
                <div className="mt-10 text-transparent">hello</div>
                </div>
                )
            }
              </div>
            

            </div>
            {/*Main Data Ends */}
            {/*Closed Button start */}
            <button
              type="button"
              style={{ top: -14, right: 55 }}
              className="absolute  text-gray-400 bg-black rounded-full text-sm p-2.5 ml-auto inline-flex items-center"
              onClick={()=>setOpenFeedBack(false)}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            {/*Closed Button End */}
          </div>
        </div>
      </div>
   
    </>
  );
}
