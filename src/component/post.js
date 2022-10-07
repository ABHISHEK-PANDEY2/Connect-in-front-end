import like from "../images/like.svg";
import unlike from "../images/unlike.svg";
import { useEffect, useState } from "react";
import comment from "../images/comment.svg";
import share from "../images/share.svg";
const Post = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const userID = JSON.parse(sessionStorage.getItem("userData"));
  const postData = props.data;
  
  useEffect(()=>{
    postData.likes.includes(userID.username)? setIsLiked(true) : setIsLiked(false);;
  },[])

 function addLike() {
    setIsLiked(!isLiked);
    console.log(userID);
    fetch(`http://localhost:5000/like/${postData._id}/${userID.username}`);
  }

  return (
    <div className={`post post-id-${postData._id}`}>
      <div className="user-profile">
        <img src={postData.profilePic} alt="" className="profile-pic" />
        <span>
          <p className="user-name">{postData.name}</p>
          {postData.branch}
        </span>
      </div>
      <div className="content">
        <p className="post-text">{postData.text}</p>
        {postData.img && (
          <a href={`http://localhost:5000/posts/${postData._id}/img`}>
            <img
              src={`http://localhost:5000/posts/${postData._id}/img`}
              className="post-img"
            />
          </a>
        )}
      </div>
      <hr />
      <div className="post-footer">
        <button onClick={addLike}>
          <img className={`like ${isLiked?"like-shadow":""}`} src={isLiked ? like : unlike} />
        </button>
        <img src={comment} alt="" />
        <img src={share} alt="" />
      </div>
    </div>
  );
};

export default Post;
