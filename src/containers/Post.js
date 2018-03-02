import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import PostHeader from '../components/PostHeader';
import { convertMarkdownToHtml } from '../lib/md';
import { getPostData } from '../lib/fire';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: '',
      postContent: '',
      isLoading: true,
    };
  }

  componentDidMount() {
    if (this.props.match) {
      if (this.props.match.params.slug) {
        // fetch the post based on the slug, and do it as a promise.

        // when the promise succeeds, change the state.

        // if we didn't find a post, redirect to 404 not found

        let postData = getPostData(this.props.match.params.slug);

        if (postData) {
          this.setState({
            postTitle: postData.postTitle,
            postContent: postData.postContent,
            isLoading: false,
          });
        } else {
          // redirect to 404 not found
        }

        
      }
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )
    }
    return (
      <div>
        <PostHeader title={this.state.postTitle} />
      </div>
    )
  }
}

export default Post;
