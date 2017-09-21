import React, { Component } from 'react';
import { Switch, Route} from "react-router-dom";
import Header from "../main/header/header.jsx"
import ListContainer from "../main/list/list-container.jsx";
import TrackReviewContainer from "../main/review/track-review/track-review-container.js";
import AlbumReviewContainer from "../main/review/album-review/album-review-container.js";
import Footer from "./footer/footer.js"

class App extends Component {
    render() {
        return (
            <div>
            <Header />
            <Switch>
                <Route exact path="/" component={ListContainer}></Route>
                <Route path="/album/:id" component={AlbumReviewContainer}></Route>
                <Route path="/track/:id" component={TrackReviewContainer}></Route>
            </Switch>
            <Footer />
            </div>
        );
    }
}

export default App;