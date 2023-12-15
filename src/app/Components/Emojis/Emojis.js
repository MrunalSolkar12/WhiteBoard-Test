import Image from "next/image";
import "./Emojis.css";
export const Emojis = ({changeEmoji}) => {

    

  return (
    <>
      <div className="emoji-box">
      <div className="emoji">
        <Image
          src={`/images/${changeEmoji}.png`}
          alt="cursor"
          width={45} 
          height={45} 
        />
      </div>
      </div>  
    </>
  );
};
