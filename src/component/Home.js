import { useState, useEffect } from "react";
import Post from "./post";
const Home = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [searchValue, setSearchValue] = useState("");
  const [file, setFile] = useState("");
  const [postData, setPostData] = useState("");
  const [isPending, setIsPending] = useState(true);

  // useEffect(() => {
  //   fetch(" http://localhost:8080/posts")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setIsPending(false);
  //       setPostData(res);
  //     });
  // }, []);
  console.log(postData);
  return (
    <div className="home">
      <div className="post-container">
        <div className="post-inp">
          {/* <img src={userData[0].profilePic} className="profile-pic" alt="" /> */}
          <input
            type="text"
            placeholder="share a post"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {/* <input
            type="file"
            placeholder="share a post"
            value={file}
            onChange={(e) => setFile(e.targuet.value)}
          // /> */}
          <button className="post-btn">Send</button>
        </div>
        {isPending && <h1>Loading...</h1>}
        {!isPending && postData.map((post, i) => <Post data={post} key={i} />)}
      </div>
    </div>
  );
};

export default Home;
