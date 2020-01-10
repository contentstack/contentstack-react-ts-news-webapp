import React, {Component} from 'react'
import { Stack } from '../common/contentstack-api/api'
import '../styles/styles.css'


export default class Detail extends Component{
    constructor(props) {
      super(props)
      console.log(props.match.params.uid)
      this.uid = props.match.params.uid
      this.state = { loading : true, result: null}
    }

    componentDidMount () {
      var  Query = Stack.ContentType("news").Entry(this.uid)
      .toJSON()
      .fetch()
      .then((result) => {
        console.log(result)
        this.setState({loading : false, result:result})
      })
      .catch((error) => {
        console.log(error)
      })
    }

    renderList (post) {
      return (
        <main>
        <div className="media-body ">
          <article className="content-section">
            <div className="article-metadata">
              <h3 className="article-title">{ post.title }</h3>
              <img className="artical-image" src={post.featured_image.url}/>
              <div dangerouslySetInnerHTML={{ __html: post.body} } />
            </div>
          </article>
        </div>
        </main>
      )
    }

    render () {
    const {loading, result} = this.state
      return (this.state.loading) ? <h1>loading...</h1> : this.renderList(result)
    }
}