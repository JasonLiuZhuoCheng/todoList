import React from 'react'
import {Route } from 'react-router-dom'
import PostList from './containers/PostListView'
import PostDetail from './containers/PostDetailView'
import Login from './containers/Login'
import Signup from './containers/Signup'

const BaseRouter = () => (
    <div>
        <Route exact path='/posts/:postID/' component={PostDetail} />
        <Route exact path="/login/" component={Login} />
        <Route exact path= '/' component={Login} />
        <Route exact path= '/posts/' component={PostList} />
        <Route exact path="/signup/" component={Signup} />
    </div>
);

export default BaseRouter