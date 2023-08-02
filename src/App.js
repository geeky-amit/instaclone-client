import "./App.css";
import Landing from "./Components/Landing";
import Post from "./Components/Post";
import NewPost from "./Components/NewPost";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/new" element={<NewPost />} />
      </Routes>
    </div>
  );
}

export default App;
