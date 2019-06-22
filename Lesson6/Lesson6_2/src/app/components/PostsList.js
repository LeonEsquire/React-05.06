import React, { Component } from 'react';
import PostItem from './PostItem';

export default class PostsList extends Component {
  render() {

    if (!this.props.posts.length) {
      return null;
    }
    console.log(this.props.posts)
    const posts = this.props.posts.map((post, index) => {
      return <PostItem key={index} {...post}/>
    })

    return (
      <>
        <h1>Посты</h1>
        <div>
          {posts}
        </div>
      </>
    )
  }
}
