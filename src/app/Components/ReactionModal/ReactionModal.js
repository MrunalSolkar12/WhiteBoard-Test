import "./ReactionModal.css";
import Image from "next/image";

export const ReactionModal = ({setEmojis,setChangeEmoji}) => {

  function handleEmojiReaction(emoji){
    setEmojis(true);
    //setChangeEmoji(emoji);
    setTimeout(()=>{
        setEmojis(false);
    },700);
  };  
  

  return (
    <>
      <div className="reaction-box">
        <button className="like" onClick={()=>{handleEmojiReaction(),setChangeEmoji("smileystar")}}>
          <Image
            src="/images/smileystar.png" // Path to your logo image in the "public" directory
            alt="cursor"
            width={65} // Specify the desired width
            height={65} // Specify the desired height
            className="custom-image"
          />
        </button>

        <button className="like" onClick={()=>{handleEmojiReaction(),setChangeEmoji("fire")}}>
          <Image
            src="/images/fire.png" // Path to your logo image in the "public" directory
            alt="cursor"
            width={65} // Specify the desired width
            height={65} // Specify the desired height
            className="custom-image"
          />
        </button>

        <button className="like" onClick={()=>{handleEmojiReaction(),setChangeEmoji("heart")}}>
          <Image
            src="/images/heart.png" // Path to your logo image in the "public" directory
            alt="cursor"
            width={65} // Specify the desired width
            height={65} // Specify the desired height
            className="custom-image"
          />
        </button>

        <button className="like" onClick={()=>{handleEmojiReaction(),setChangeEmoji("party2")}}>
          <Image
            src="/images/party2.png" // Path to your logo image in the "public" directory
            alt="cursor"
            width={65} // Specify the desired width
            height={65} // Specify the desired height
            className="custom-image"
          />
        </button>

        <button className="like" onClick={()=>{handleEmojiReaction(),setChangeEmoji("Liked4")}}>
          <Image
            src="/images/Liked4.png" // Path to your logo image in the "public" directory
            alt="cursor"
            width={65} // Specify the desired width
            height={65} // Specify the desired height
            className="custom-image"
          />
        </button>


        
      </div>
    </>
  );
};
