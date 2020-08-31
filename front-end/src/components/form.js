import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios'

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class CustomForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    handleFormSubmit = (event, requestType, postId) => {
     const title = event.title
     const content = event.content
     const description = event.description
     console.log(event)
     switch (requestType) {
         case 'post':
            return axios.post('https://todo-list-django-react.herokuapp.com/api/', {
                title: title,
                content: content,
                description: description
            })
            .then(window.location.reload(false))
            .catch(err => console.log(err))
         case 'put':
            return axios.put(`https://todo-list-django-react.herokuapp.com/api/${postId}/`, {
                title: title,
                content: content,
                description: description
            })
            .then(window.location.reload(false))
            .catch(err => console.log(err))
     }

  }

  render() {
    return (
      <div>
          <Form onFinish={(event) => {this.handleFormSubmit(event, this.props.requestType, this.props.postId)}}> 
              <Form.Item  name="title" label="Title" shouldUpdate>
                  <Input placeholder="Put a title here"></Input>
              </Form.Item>
              <Form.Item name="content"  label="Content" shouldUpdate>
                  <Input placeholder="Put a content here"></Input>
              </Form.Item>
              <Form.Item name="description"  label="Description" shouldUpdate>
                  <Input placeholder="Put a description here"></Input>
              </Form.Item>
              <Form.Item>
                  <Button type="primary" htmlType="submit" >
                      {this.props.btnText} 
                  </Button>
              </Form.Item>
          </Form>
      </div>
    );
  }
}

export default CustomForm