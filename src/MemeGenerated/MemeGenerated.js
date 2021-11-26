import React, { useState } from "react";
import "./MemeGenerated.css";
import { useHistory, useLocation } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";

export const MemeGenerated = () => {
  const [copied, setCopied] = useState(false);

  const clipboard = useClipboard();
  const history = useHistory();
  const location = useLocation();
  const url = new URLSearchParams(location.search).get("url");

  const copyLink = () => {
    clipboard.copy(url);
    setCopied(true);
  };

  return (
    <div className="container">
      <button onClick={() => history.push("/")} className="home">
       Create More Memes
      </button>
      <button onClick={copyLink} className="copy">
        {copied ? "Link copied!" : "Copy link"}
      </button>
      {url && <img alt="meme" src={url} />}
    </div>
  );
};
