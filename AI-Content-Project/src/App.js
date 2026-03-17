import React, { useState } from "react";
import axios from "axios"; 
import PromptInput from "./components/PromptInput";
import ResultBox from "./components/ResultBox";
import History from "./components/History";
import "./styles/App.css"; 

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  const generateText = async () => {
    if (!prompt.trim()) return;
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
        },
        {
          headers: {
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );

      const generated = response.data.choices[0].message.content;
      setResult(generated);
      setHistory([{ prompt, result: generated }, ...history]);
    } catch (error) {
      setResult("Failed to generate content. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App"> 
      <PromptInput
        prompt={prompt}
        setPrompt={setPrompt}
        generate={generateText}
        loading={loading}
      />
      <ResultBox result={result} />
      <History history={history} />
    </div>
  );
}

export default App;