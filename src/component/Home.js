import { useState, useEffect } from "react";
import Post from "./post";
import axios from "axios";
const Home = () => {
  const [userData, setUserData] = useState("");
  const [textValue, setTextValue] = useState("");
  const [posts, setPosts] = useState("");
  const [file, setFile] = useState();
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

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log("submit");
    async function sendPost() {
      try {
        const user = JSON.parse(sessionStorage.getItem("userData"));
        console.log(user);
        const formdata = new FormData();
        formdata.append("text", textValue.trim());
        formdata.append("username", user.username);
        formdata.append("timeStamp", new Date().getTime());
        formdata.append("profilePic", user.profilePic);
        formdata.append("sem", user.sem);
        formdata.append("branch", user.branch);
        formdata.append("name", user.name);
        formdata.append("file", file);

        const rawres = await axios.post(
          "http://localhost:5000/posts",
          formdata
        );
        const res = await rawres.json();
        console.log(`res: ${res}`);
      } catch (e) {
        console.log(e.message);
      }
    }
    sendPost();
  };
  console.log(file);
  // console.log(JSON.parse(JSON.stringify(file)));
  return (
    <div className="home">
      <div className="post-container">
        <div>
          <form action="" className="post-inp">
            <img src={userData.profilePic} className="profile-pic" alt="" />
            <input
              id="text-post"
              type="text"
              placeholder="share a post"
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
              autoComplete="off"
              required
            />
            <input
              type="file"
              placeholder="share a post"
              value={""}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button className="post-btn" type="submit" onClick={handleSubmit}>
              Send
            </button>
          </form>
        </div>
        {isPending && <h1>Loading...</h1>}
        {!isPending &&
          posts
            .map((post) => post)
            .reverse()
            .map((post, i) => <Post data={post} key={i} />)}
      </div>
    </div>
  );
};

export default Home;
