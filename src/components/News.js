import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  article = [
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Lawrence Bonk",
      "title": "The second-gen HomePod is on sale for $175 right now",
      "description": "If you've been thinking of buying Apple's HomePod (2nd generation), now's the time to act — it's on sale right now at Verizon for $175. That's a significant $125 discount (42 percent off) and represents one of the best deals we've seen on the smart speaker to…",
      "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_3226799e-cef0-4e4f-a4ed-fe5c8332fb86",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/06/03/c3d5cee8-7e98-42a0-8fe3-0d1a46eef74f/thumbnail/1200x630/927aa30552b17d4334dcf710152e2053/inx-trooper-charges-dropped-060324.jpg?v=d7bbca61a2ddd34e0cfc8fb46aec1df3",
      "publishedAt": "2024-06-04T07:41:44Z",
      "content": "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ReadWrite"
      },
      "author": "Owen Good",
      "title": "Just Cause maker announces layoffs, closes two studios",
      "description": "It’s still a terrible year for employment in the video games development industry. Monday, Sweden-based Avalanche Studios Group, makers of… Continue reading Just Cause maker announces layoffs, closes two studios\nThe post Just Cause maker announces layoffs, cl…",
      "url": "https://readwrite.com/video-games-development-layoffs-just-cause-avalanche-studios/",
      "urlToImage": "https://readwrite.com/wp-content/uploads/2024/06/ss_c5f5d74cc8eb64bf182e79758875ad250e7d2c2f.jpg",
      "publishedAt": "2024-06-04T00:08:29Z",
      "content": "Its still a terrible year for employment in the video games development industry.\r\nMonday, Sweden-based Avalanche Studios Group, makers of the just-optioned-to-Hollywood Just Cause action franchise, … [+1704 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Hipertextual"
      },
      "author": "Quelian Sanz",
      "title": "Apple marca como obsoleto uno de sus iPhone más icónicos: adiós al soporte y las reparaciones",
      "description": "Apple acaba de actualizar su listado de dispositivos obsoletos. Un iPhone no está verdaderamente anticuado hasta que la compañía de Cupertino así lo indica en su lista oficial. Hoy hay malas noticias para los más nostálgicos, pues el iPhone 5s es el encargado…",
      "url": "http://hipertextual.com/2024/06/apple-marca-como-obsoleto-uno-de-sus-iphone-mas-iconicos-adios-al-soporte-y-las-reparaciones",
      "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2021/10/Apple-Store-scaled.jpg",
      "publishedAt": "2024-06-04T08:19:01Z",
      "content": "Apple acaba de actualizar su listado de dispositivos obsoletos. Un iPhone no está verdaderamente anticuado hasta que la compañía de Cupertino así lo indica en su lista oficial. Hoy hay malas noticias… [+3063 chars]"
    },
    {
      "source": {
        "id": "techcrunch",
        "name": "TechCrunch"
      },
      "author": "Sarah Perez",
      "title": "Instagram confirms test of 'unskippable' ads - TechCrunch",
      "description": "The change would see Instagram becoming more like the free version of YouTube, which requires users to view ads before and in the middle of watching videos.",
      "url": "https://techcrunch.com/2024/06/03/instagram-confirms-test-of-unskippable-ads/",
      "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/08/instagram-icon-ios-closeup.jpg?resize=1200,675",
      "publishedAt": "2024-06-03T16:49:11Z",
      "content": "Instagram confirmed it’s testing unskippable ads after screenshots of the feature began circulating across social media. These new ad breaks will display a countdown timer that stops users from being… [+2595 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "GSMArena.com"
      },
      "author": "Peter",
      "title": "Qualcomm spoofs old \"I'm a Mac\" ads to promote Snapdragon X powered PCs - GSMArena.com",
      "description": "The iconic ads have been imitated before and Mac guy Justin Long is often recast as a newfound PC user. Remember those “I’m a Mac/I’m a PC” ads that Apple...",
      "url": "https://www.gsmarena.com/qualcomm_spoofs_old_im_a_mac_ads_to_promote_snapdragon_x_powered_pcs-news-63119.php",
      "urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/06/qualcomm-im-a-mac-spoof/-952x498w6/gsmarena_000.jpg",
      "publishedAt": "2024-06-03T16:49:01Z",
      "content": "Remember those Im a Mac/Im a PC ads that Apple used to run in the late 2000s? They were so successful that they have their own Wikipedia page. Several rivals have tried to imitate them, going as far … [+939 chars]"
    }

  ]
  constructor() {
    super()
    console.log("This is from News")
    this.state = {
      article: this.article,
      loading: false
    }
  }
//constructor age run hoi, trpor component run hoi
  componentDidMount(){

  }

  render() {
    return ( //The total summation of a container should be a 12. so how many time we are dividing determines the no of elements
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className="row">
         {this.state.article.map((elements) => {
           return <div className="col-md-3" key={elements.url} >
              <NewsItem title={elements.title.slice(0.45)} description={elements.description.slice(0,88)} imgurl={elements.urlToImage} newsUrl={elements.url}/>
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


