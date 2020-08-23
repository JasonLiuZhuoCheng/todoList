import React from 'react'
import axios from 'axios'
import Posts from '../components/Post'



class PostList extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    posts: res.data
                });
            })
    }

    render() {
        return (
            <Posts data={this.state.posts}></Posts>
        )
    }
}

export default PostList