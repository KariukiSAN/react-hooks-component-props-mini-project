import React from "react";
import blogData from "../data/blog";
import logo from "../assets/logo";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

const Blog = () => {
  return (
    <div>
      <header/>
      <br></br><br></br><br></br>
      <articlelist data={blogData}/>
      <br/><hr style={{border: '1px solid #8c8b8b', width:'90%', margin:"auto"}} />
    </div>
    );};

console.log(blogData);

function App() {
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header blogname= {blogData.name}/>
      <About About= {blogData.about} image= {blogData.image}/>
      <ArticleList posts= {blogData.posts}/>
    </div>
  );
}

export default App;


