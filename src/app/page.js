"use client";
import { Loader } from "./Components/Loader/Loader";
import { NewCanvas2 } from "./Components/NewCanvas2";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {loading ? (
        <div>
        <Loader />
        </div>
      ) : (
        <div>
          <NewCanvas2 />
        </div>
      )}
    </>
  );
}
