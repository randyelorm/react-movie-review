import React, { Component } from 'react';
import axios from "axios"
import "./movie.css"


class MovieReview extends Component {

    constructor (props) {
        super (props)

        this.state = {
            reviews: []
        }
    }

    componentDidMount() {

        // axios.get("https://api.nytimes.com/svc/movies/v2/reviews/all.json?{this.state.value}&api-key=EL60qpjMJbSG8Gi3c7ozM9h4GRpInBwR")
        axios.get ("https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=EL60qpjMJbSG8Gi3c7ozM9h4GRpInBwR")
   
 
        .then (
            
            (json_data)=>{
                this.setState({
                    reviews: json_data.data.results
                })
                console.log (json_data.data.results)
               
            }
        )

        .catch(
            (err)=> {
                console.log(err)
                
            }
        )

    }



    render() {
        return (
            <>
            <div className = "review_box">
                   <div className = "title_div"> <h1>Randys Movie Reviews API</h1> </div>

                    <div className = "APIinformation">
                        {    
                            this.state.reviews.map(
                                
                                (each_review)=> {
                                
                                    return (
                                        <div className = "api_info">
                                            <h2 className = "img-box"> <img src={each_review.multimedia.src} alt="" /> </h2>
                                            <h2>Movie Title: <span className ="each_info">{each_review.display_title} </span> </h2>
                                            <h2>Rating: <span className ="each_info">{each_review.mpaa_rating} </span></h2>
                                            <h2>Critics pick: <span className ="each_info"> {each_review.critics_pick}</span></h2>
                                            <h2>By Line: <span className ="each_info"> {each_review.byline} </span></h2>
                                            <h2>  Head Line: <span className ="each_info">  {each_review.headline} </span> </h2>
                                            <h2 className = "summary">  Movie Summary: <span className ="each_info">{each_review.summary_short} </span></h2>
                                            <h2> Publication Date: <span className ="each_info">  {each_review.publication_date} </span> </h2>
                                            <h2>Opening Date: <span className ="each_info"> {each_review.opening_date} </span></h2>
                                            <h2>Date Updated: <span className ="each_info">  {each_review.date_updated} </span> </h2>
                                            
                                           <br />
                                           <br />

                                            {
                                            
                                            }
                                        </div>
                                    ) 
                                    
                                }
                            )
                        }
                    </div>
                    
            </div>
            </>
        );
    }
}

export default MovieReview;
