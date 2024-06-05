import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      loading: false
    }
  }
//constructor age run hoi, trpor component run hoi
  async componentDidMount(){
  let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-05-04&sortBy=publishedAt&apiKey=0915bd148ab74fdd8805d362dec2f9f6"
  let data = await fetch(url)
  let parsedata = await data.json()
  console.log(parsedata)
  this.setState({articles: parsedata.articles})
  }

  render() {
    return ( //The total summation of a container should be a 12. so how many time we are dividing determines the no of elements
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className="row">
         {this.state.articles.map((elements) => {
           return <div className="col-md-3" key={elements.url} >
              <NewsItem title={elements.title? elements.title.slice(0.45):"Not Availble"} description={elements.description?elements.description.slice(0,88):"This content is not available  "} 
              imgurl={elements.urlToImage} newsUrl={elements.url}/>
            </div>
        }
            )
            }
          </div>
      </div>
      

    )
  }
}

export default News


