import { useState, useEffect } from "react";

export default function Typewriter({
  text = [],
  interval = "",
  Markup = "span",
}) {
  const [typedText, setTypedText] = useState([]);

  const typingRender = (text, updater, interval) => {
    let localTypingIndex = 0;
    let localTyping = "";
    if (text) {
      let printer = setInterval(() => {
        if (localTypingIndex < text.length) {
          updater((localTyping += text[localTypingIndex]));
          localTypingIndex += 1;
        } else {
          localTypingIndex = 0;
          localTyping = "";
          clearInterval(printer);
        }
      }, interval);
    }
  };
  useEffect(() => {
    typingRender(text, setTypedText, interval);
  }, [text, interval]);

  const splitRender = (
    <ul>
      {typedText.split("").map((text) => (
        <li>{text}</li>
      ))}
    </ul>
  );
  console.log(splitRender);

  return <Markup>{splitRender}</Markup>;
}
