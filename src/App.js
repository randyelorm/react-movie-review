import MovieReview from "./Components/MOVIEREVIEW/MovieReview";
import TopStories from "./Components/TOP STORIES/TopStories";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
  <div>
    <Router>
      <Switch>
            <Route exact path = "/">
              <MovieReview/>
             </Route>
           
          <Route path = "/topstories">
              <TopStories/>
          </Route>
      </Switch>
    </Router>


  </div>
  );
}

export default App;
