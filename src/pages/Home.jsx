
import React, {Component} from 'react'
import '../styles/styles.css'
import { Link } from 'react-router-dom'
import { Stack } from '../common/contentstack-api/api'

export default class Home extends Component{
    constructor() {
      super()
      this.state = { loading : true, result: null}
    }
    componentDidMount () {
      var  Query = Stack.ContentType("news").Query()
      .toJSON()
      .find()
      .then((result) => {
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
          {
            post.map((value, index) => {
              return (
              <article className="content-section">
                <div className="article-metadata">
                  <Link to={`/detail/${value.uid}`}>
                     <h3 className="article-title">{ value.title }</h3>
                  </Link>
                  <div dangerouslySetInnerHTML={{ __html: value.body} } />
                </div>
              </article>
                 )
            })
          }
        </div>
        </main>
      )
    }

  
    render () {
      const {loading, result} = this.state
      return (this.state.loading) ? <h1>loading...</h1> : this.renderList(result[0])
    }
  }