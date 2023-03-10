import React, { useState, useEffect } from "react";
import Typewriter from "./Typewriter";

const Flag = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/77726f"
    )
      .then((res) => res.text())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const textToRender = posts;

  return (
    <div>
      <Typewriter text={textToRender} interval={200} Markup={"code"} />
    </div>
  );
};

export default Flag;
