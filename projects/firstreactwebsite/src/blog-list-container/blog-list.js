import React, { Component } from 'react';

import BlogPost from "./blogpost.js"

class BlogPostContainer extends Component {
    constructor(){
        super();
        this.posts = [
            { album: "Science Fiction",
              artist: "Brand New",
              rating: "9",
              img: "http://s0.limitedrun.com/images/1250184/Science_Fiction.jpg",
              review: "Lorem Ipson Lorem Ipson Lorem Ipson Lorem Ipson Lorem Ipson Lorem Ipson But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
            },

            {
                album: "The Underside of Power",
                artist: "Algiers",
                rating: "8",
                img: "http://matablog.matadorrecords.com/wp-content/uploads/2017/04/AlgiersUoP-copy.jpg",
                review: "Lorem Ipson Lorem Ipson Lorem Ipson Lorem Ipson Lorem Ipson Lorem Ipson But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
            },
            {
                album: "Painted Ruins",
                artist: "Grizzly Bear",
                rating: "6.5",
                img: "http://images.genius.com/41fd9e8a89a7ec96dd1b343ae08da775.1000x1000x1.jpg",
                review: "Lorem Ipson Lorem Ipson Lorem Ipson Lorem Ipson Lorem Ipson Lorem Ipson But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"   
            },
            {
                album: "Mad Man Across The Water",
                artist: "Elton John",
                rating: "10",
                img: "https://img0.etsystatic.com/184/0/10408296/il_340x270.1222088246_21i4.jpg",
                review: "holy shit dude this album is great!!!"

            }
        ]
         
    }

    genPosts(){
       return this.posts.map((post) => {
           return <BlogPost post = {post}/>
    
        })
        
    }

    
    
    
    
    
    
    render() {
        return (
            <div>
            {this.genPosts()}
            </div>
        );
    }
}

export default BlogPostContainer;