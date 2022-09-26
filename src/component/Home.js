import { useState, useEffect } from "react";
import Post from "./post";
const Home = () => {
  const [userData, setUserData] = useState("");
  const [textValue, setTextValue] = useState("");
  const [posts, setPosts] = useState("");
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    async function userInfo() {
      const rawres = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: localStorage.getItem("username"),
        }),
      });
      const res = await rawres.json();
      setUserData(res);
      sessionStorage.setItem("userData", JSON.stringify(res));
    }
    userInfo();

    async function getPost() {
      const rawres = await fetch("http://localhost:5000/posts");
      const res = await rawres.json();
      console.log(res);
      setPosts(res);
      setIsPending(false);
    }
    getPost();
  }, []);

  useEffect(() => {
    async function sendPost() {
      const data = {
        username: "21CS001",
        text: textValue,
        timeStamp: new Date().getTime(),
      };
      console.log(data);
      const rawres = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await rawres.json();
      console.log(`res: ${res}`);
      setPosts(res);
    }
    const postBtn = document.querySelector(".post-btn");
    postBtn.addEventListener("click", sendPost);
  }, []);

  return (
    <div className="home">
      <div className="post-container">
        <div className="post-inp">
          <img src={userData.profilePic} className="profile-pic" alt="" />
          <input
            id="text-post"
            type="text"
            placeholder="share a post"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
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
        {!isPending && posts.map((post, i) => <Post data={post} key={i} />)}
      </div>
    </div>
  );
};

export default Home;
