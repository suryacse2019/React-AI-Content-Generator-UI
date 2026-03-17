# AI Content Generator UI

A sleek, responsive **React-based frontend** for generating AI-powered content. This project allows users to input prompts and receive dynamically generated text using AI APIs, making content creation fast, easy, and intuitive.

---

## 🚀 Features

* ✨ **Clean and modern UI**
* 🧠 **AI-powered content generation**
* ⚡ **Fast performance** with React Hooks
* 🎯 **User-friendly input forms**
* 🔄 **Real-time updates** of generated content
* 📱 **Responsive design** for mobile and desktop

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** CSS / Tailwind CSS (optional)
* **State Management:** React Hooks (`useState`, `useEffect`)
* **API Integration:** Axios / Fetch
* **Build Tool:** Vite / Create React App

---

## 📁 Project Structure

```
AI-Content-Project/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │    ├── History.js
│   │    ├── Navbar.js
│   │    ├── PromptInput.js
│   │    ├── ResultBox.js
│   ├── styles/
│   │    ├── App.css
│   │    ├── index.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-ai-content-generator-ui.git
```

2. Navigate into the project folder:

```bash
cd ai-content-generator-ui
```

3. Install dependencies:

```bash
npm install
```

---

## ▶️ Running the App

Start the development server:

```bash
npm start        # for Create React App
```

or with Vite:

```bash
npm run dev
```

Open your browser at:

```
http://localhost:3000        # CRA default
http://localhost:5173        # Vite default
```

---

## 🔌 API Configuration

1. Store your API endpoint or key inside the `services` folder.
2. Example using environment variables:

```
REACT_APP_API_KEY=your_openai_api_key_here
```

3. Example Axios setup in `services/api.js`:

```js
import axios from "axios";

export const generateContent = async (prompt) => {
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    }
  );
  return response.data.choices[0].message.content;
};
```

---

## 🧩 How to Use

1. Enter your prompt in the input field.
2. Click **Generate**.
3. View AI-generated content instantly in the result box.
4. Optionally, copy or save your generated content.

---

## 📦 Build for Production

```bash
npm run build
```

This will create a `build/` folder ready for deployment.

---

## 🧪 Testing

```bash
npm test
```

---

## 📸 Screenshots (Optional)

*Add screenshots of your UI here to showcase your design.*

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 💡 Future Improvements

* Add user authentication
* Save and manage generated content history
* Support multiple AI templates (blog posts, captions, emails)
* Dark mode UI
* Export generated content as `.txt` or `.pdf`

---

## 📬 Contact

For any queries or suggestions, feel free to reach out via GitHub or email.

**Happy Coding! 🚀**

 
