import React from 'react'
import axios from 'axios'
import Posts from '../components/Post'
import CustomForm from '../components/form'


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
            <div>
                <Posts data={this.state.posts}></Posts>
                <br />
                <h2>Create an Post</h2>
                <CustomForm
                    requestType="post"
                    articleId={null}
                    btnText="Create Post">
                </CustomForm>
            </div>
        )
    }
}

export default PostList