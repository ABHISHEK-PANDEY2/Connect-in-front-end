const Post = (props) => {
  const postData = props.data;

  return (
    <div className="post">
      <p>{postData.text}</p>
    </div>
  );
};

export default Post;
