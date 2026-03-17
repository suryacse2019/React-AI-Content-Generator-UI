import React from "react";

export default function PromptInput({ prompt, setPrompt, generate, loading }) {
  return (
    <div className="prompt-input">
      <textarea
        placeholder="Type your prompt here..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={4}
      />
      <button onClick={generate} disabled={loading}>
        {loading ? "Generating..." : "Generate"}
      </button>
    </div>
  );
}