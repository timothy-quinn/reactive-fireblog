import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

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
        // fetch the post based on the slug

        // if we didn't find a post, redirect to 404 not found

        this.setState({
          postTitle: this.props.match.params.slug,
          postContent: '',
          isLoading: false,
        });
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
        <h2>{this.state.postTitle}</h2>
      </div>
    )
  }
}

export default Post;
