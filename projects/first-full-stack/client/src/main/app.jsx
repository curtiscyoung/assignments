import React, { Component } from 'react';
import { Switch, Route} from "react-router-dom";
import Header from "../main/header/header.jsx"
import ListContainer from "../main/list/list-container.jsx";
import TrackReviewContainer from "../main/review/track-review/track-review-container.js";
import AlbumReviewContainer from "../main/review/album-review/album-review-container.js";
import FormContainer from "./post/form-container.js";
import Footer from "../main/footer/footer.js";
import AlbumFormContainer from "../main/review/album-review/edit/album-form-container.js";
import TrackFormContainer from "../main/review/track-review/edit/track-form-container.js"

class App extends Component {
    render() {
        return (
            <div className="site-wrapper">
            <Header />
            <Switch>
                <Route exact path="/" component={ListContainer}></Route>
                <Route path="/album/:id" component={AlbumReviewContainer}></Route>
                <Route path="/track/:id" component={TrackReviewContainer}></Route>
                <Route path="/post" component={FormContainer}></Route>
                <Route path="/editAlbum/:id" component={AlbumFormContainer}/>
                <Route path="/editTrack/:id" component={TrackFormContainer}/>

            </Switch>
            
            <Footer />
            </div>
        );
    }
}

export default App;