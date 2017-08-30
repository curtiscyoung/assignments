import React from "react";
import Header from "./header/header.js";
import BlogPostContainer from "./blog-list-container/blog-list.js";
import Footer from "./footer.js";

class App extends React.Component {
 
    render(){
        return (
            <div className="wrapper">
            <Header/>
            <h1 className="reviews col-lg-12">Music Reviews</h1>
            <BlogPostContainer />
            <Footer/>
            </div>

        )

    }


}


export default App;

