import React from "react";

export default function History({ history }) {
  if (!history.length) return <p>No history yet.</p>;

  return (
    <div className="history">
      <h3>Previous Prompts</h3>
      <ul>
        {history.map(({ prompt, result }, index) => (
          <li key={index}>
            <strong>Prompt:</strong> {prompt}
            <br />
            <strong>Result:</strong> {result}
          </li>
        ))}
      </ul>
    </div>
  );
}