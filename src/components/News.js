import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { isDisabled } from '@testing-library/user-event/dist/utils'

export class News extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }
  //constructor age run hoi, trpor component run hoi
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0915bd148ab74fdd8805d362dec2f9f6&page=1&pageSize=10`
    let data = await fetch(url)
    let parsedata = await data.json()
    console.log(parsedata)
    this.setState({ 
      articles: parsedata.articles, totalResults: parsedata.totalResults
    })
  }

  handlePrevClick = async () =>{
    console.log("the prev click is working")
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0915bd148ab74fdd8805d362dec2f9f6&page=${this.state.page - 1}&pageSize=10`
    let data = await fetch(url)
    let parsedata = await data.json()
    console.log(parsedata)
    this.setState({ 
      page: this.state.page - 1,
      articles: parsedata.articles 
    })
    
  }
  handleNextClick = async ()=>{
    console.log("the Next click is working")
    if(this.state.page+1 > Math.ceil(this.totalResults/10)){
      isDisabled()
    }else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0915bd148ab74fdd8805d362dec2f9f6&page=${this.state.page + 1}&pageSize=10`
    let data = await fetch(url)
    let parsedata = await data.json()
    console.log(parsedata)
    this.setState({ 
      page: this.state.page + 1,
      articles: parsedata.articles 
    })
  }
  }
  
  render() {
    return ( //The total summation of a container should be a 12. so how many time we are dividing determines the no of elements
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((elements) => {
            return <div className="col-md-3" key={elements.url} >
              <NewsItem title={elements.title ? elements.title.slice(0.45) : "Not Availble"} description={elements.description ? elements.description.slice(0, 88) : "This content is not available  "}
                imgurl={elements.urlToImage} newsUrl={elements.url} />
            </div>
          }
          )
          }
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" class="btn btn-dark" disabled={this.state.page <= 1} onClick={this.handlePrevClick}>&larr; Previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          
        </div>
      </div>


    )
  }
}

export default News


