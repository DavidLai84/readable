import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import PostList from './components/PostList'
import PostView from './components/PostView'
import PostForm from './components/PostForm'
import CategoryPostList from './components/CategoryPostList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
    }
  }
  
  componentDidMount() {
    /*
    const url = `${process.env.REACT_APP_BACKEND}/categories`;
    const url = `${process.env.REACT_APP_BACKEND}/redux/posts`;
    
    8xf0y6ziyjabvozdd253nd
    6ni6ok3ym7mf1p33lnez
    0533b1d1-430e-4779-873e-5770b4dcdd9d
    
    const url = `${process.env.REACT_APP_BACKEND}/posts/6ni6ok3ym7mf1p33lnez/comments`;
        {this.state.backend}
    */
    const url = `${process.env.REACT_APP_BACKEND}/posts/8xf0y6ziyjabvozdd253nd/comments`;
    //console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
                 credentials: 'include' } )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        this.setState({backend:data});
      });
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={PostList} />
        <Route exact strict path="/create-post/" component={PostForm} />
        <Route exact strict path="/:category" component={CategoryPostList} />
        <Route exact strict path="/:category/:post" component={PostView} />
        <Route exact strict path="/:category/:post/edit" component={PostForm} />
      </div>
    )
  }
}

export default App