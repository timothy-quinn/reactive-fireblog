import React from 'react';

// TODO: see if we can find a markdown JS editor that we can use
// TODO: redirect to authentication page if the user is not authenticated
// TODO: show post list on left, clicking on the post will fetch the markdown to show in the editor on the right
// TODO: handle adding posts
// TODO: handle uploading images
// TODO: handle updating posts
// TODO: handle marking posts as draft

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
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
        <p>Editor</p>
      </div>
    )
  }
}

export default Editor;
