import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return ( //The total summation of a container should be a 12. so how many time we are dividing determines the no of elements
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-3"> 
            <NewsItem title="My Title" description="This is description" imgurl="https://readwrite.com/wp-content/uploads/2024/06/ss_c5f5d74cc8eb64bf182e79758875ad250e7d2c2f.jpg"/> 
          </div>
          <div className="col-md-3">
            <NewsItem title="My Title" description="This is description" />
          </div>
          <div className="col-md-3">
            <NewsItem title="My Title" description="This is description" />
          </div>
        </div>
      </div>
    )
  }
}

export default News


