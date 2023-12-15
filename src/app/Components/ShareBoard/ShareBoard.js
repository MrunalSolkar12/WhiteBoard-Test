import "./ShareBoard.css";
import Image from "next/image";
import Avatar from 'react-avatar';

export const ShareBoard = ({ setConfetti,setReactionModal,loginPicture }) => {
  function onClickConfetti() {
    setConfetti(true);

    setInterval(() => {
      setConfetti(false);
    }, 2000);
  }

  function showReactionModal(){
    setReactionModal(true);
  }


  return (
    <>
      <div className="share">
        <button className="confetti" onClick={showReactionModal} 
          data-tooltip="Reactions"
          data-flow="bottom"
        >
          <Image
            src="/images/party.png" // Path to your logo image in the "public" directory
            alt="cursor"
            width={30} // Specify the desired width
            height={30} // Specify the desired height
            className="reaction-button"
          />
        </button>

        <Avatar className="avatar" color="#e07a5f" name="Mrunal" src={loginPicture} size="35" round={true} />

        <button className="share-signup-button">
          Share Board
        </button>
      </div>
    </>
  );
};
