import React from "react";

export default function ResultBox({ result }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert("Copied to clipboard!");
  };

  return (
    <div className="result-box">
      <pre>{result}</pre>
      {result && (
        <button onClick={copyToClipboard}>Copy</button>
      )}
    </div>
  );
}