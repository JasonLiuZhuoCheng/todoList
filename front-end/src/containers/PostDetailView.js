import React from 'react'
import axios from 'axios'
import {Button, Card } from 'antd'
import CustomForm from '../components/form'

class PostDetail extends React.Component {

    state = {
        post: {}
    }

    componentDidMount() {
        const postID = this.props.match.params.postID
        axios.get(`https://todo-list-django-react.herokuapp.com/api/${postID}/`)
            .then(res => {
                console.log(res)
                this.setState({
                    post: res.data
                });
            })

    }
    handleDelete = (event) => {
        const postID = this.props.match.params.postID
        axios.delete(`https://todo-list-django-react.herokuapp.com/api/${postID}/`)
        this.props.history.push('/posts/')
        this.forceUpdate()
    }

    render() {
        return (
            <div><Card title={this.state.post.title}>
                <p>
                    {this.state.post.content} 
                </p>
            </Card>
            <br></br>
            <CustomForm
                requestType="put"
                postId={this.props.match.params.postID}
                btnText="Update Post">
            </CustomForm>
            <form onSubmit={this.handleDelete}>
                <Button type="danger" htmlType="submit">
                    Delete
                </Button>
            </form>
            </div>
        )
    }
}

export default PostDetail