import React, {useState, useEffect} from 'react';
import { Link} from "react-router-dom"
import axios from "axios"
import "./top.css"

const TopStories = () => {

    const [TopStories, setTopStories]= useState ([])


    useEffect (
         ()=> {
        
        axios.get("https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=xjqswikF0mXhASZuIhlJYIJ9k2zqVi7W")
        
        .then(
            (json_data)=> {
              
                setTopStories(json_data.data.results)
            }
        )
        
        
        .catch (
            (err)=> {
                console.log(err)
            }
        )



         },[] )
    


    return (
        <div>
             <h1 className = "h1_nav"> 
                <span>RANDY'S API TESTS </span>   
                <span> 
                <Link to="/" className = "go_to_link"> Go To Movies API </Link>
                 
                </span> 
            </h1>
            <div className = "title_div"> <h1>Top Stories API (Using useEffect Hook)</h1> <h1></h1> </div>
          <h1>
              {
                  TopStories.map (
                      (each_topstory)=> {
                          return (
                              <div>
                                       
                                       <h3> Category: {each_topstory.section}</h3>
                                       <h3>{each_topstory.title} <span>{each_topstory.byline}</span> </h3> 
                                      <div className = "top_img-box"> <img src= {each_topstory.multimedia[0].url} className = "img"  alt="" /> </div>
                                       <h2 className ="each_info">{each_topstory.multimedia[0].caption }</h2> 
                                  
                                       <h2 className ="each_info">{each_topstory.abstract}  <span><a href={each_topstory.url}>See More</a> </span> </h2>  

                                        <hr />
                              </div>
                          )
                      }
                  )
              }
              </h1>  
       
        </div>
    );
}

export default TopStories;
