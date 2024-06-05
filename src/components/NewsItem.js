import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let { title, description,imgurl,newsUrl } = this.props
    return (
      <div>
        <div className="card" style={{width: "18rem" }}>
          <img src={!imgurl?"https://readwrite.com/wp-content/uploads/2024/06/ss_c5f5d74cc8eb64bf182e79758875ad250e7d2c2f.jpg" :imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}.......</p>
            
            <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
