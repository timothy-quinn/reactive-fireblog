import React from "react";
import { Dimmer, Loader, Header, Image } from 'semantic-ui-react';
import { getBlogInfo, getPostList } from '../lib/fire';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogTitle: '',
      blogSubtitle: '',
      biography: '',
      logoUrl: '',
      titleImageUrl: '',
      postList: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    // fetch basic info from firestore
    let retrievedBlogInfo = getBlogInfo();
    let retrievedPostList = getPostList();
    // fetch it as a promise, and only change the state when the promise succeeds
    if (retrievedBlogInfo) {
      this.setState({
        isLoading: false,
        blogTitle: retrievedBlogInfo.blogTitle,
        blogSubtitle: retrievedBlogInfo.blogSubtitle,
        biography: retrievedBlogInfo.biography,
        logoUrl: retrievedBlogInfo.logoUrl,
        titleImageUrl: retrievedBlogInfo.titleImageUrl,
        postList: retrievedPostList,
      });
    } else {
      this.setState({
        isLoading: true,
      });
    }
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Dimmer active>
          <Loader />
        </Dimmer>
      );
    }
    return (
      <div>
        <Header as={'h1'}>{this.state.blogTitle}</Header>
        <Header as={'h2'}>{this.state.blogSubtitle}</Header>
        <Image href={this.state.titleImageUrl} />
        <div>
          {this.state.biography}
        </div>
        
      {/* <h1>Tim's Blog</h1>
          <p>Information, Technology, Security, and other stuff.</p>
          <p>My name is Timothy Quinn, but you can call me Tim.</p>
          <p>I live in Canberra, the capital city of Australia. I went to the University of Canberra, earning myself a Bachelor of Information Technology.</p>
          <p>I currently work for Cogito Group, a Canberra-based company, as a Digital Identity & Security Consultant. I'm also a Managing Director of Congruent Labs, a Canberra-based software development consultancy. Most of my skill is in Smart Cards, Public Key Infrastructure and Identity Management, and I develop software in a variety of languages (C#, Java, JS, etc.). More information about my work history and what I do can be found on my  LinkedIn page.</p>
          <p>Check out my Bitbucket account or my Github account to see some publicly releasable things I have written. Hit me up if you want to collaborate on something.</p>
          <p>The best way to contact me is via email at tim@timothy-quinn.com. Alternatively, you can hit me up on Twitter @timo_quinn or Keybase.</p>
          <p>This blog has no affiliation with my employers, and does not represent my employers in any way, shape or form. It's just me and my own opinions.</p>
          <p>Most of the photos/images on this site are my own. For anything that isn't, I have attempted to get Creative Commons images only. If you see something of yours that isn't attributed properly or misused, just email me at the address above and we can fix it.</p>
          <h2>Posts</h2> */}
      </div>
    );
  }
}

// pull postTitles from Firestore
// render postTites as ul
// <Link to={postItem.urlSlug}>{postItem.title}</Link>

export default Home;
