// firebase functions
import firebase from 'firebase';
require('firebase/firestore');

const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
}

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export function getBlogInfo() {
  // TODO: query firestore for the blog info
  let responseData = {
    blogTitle: 'Test Blog',
    blogSubtitle: 'Test Subtitle',
    biography: 'Test Biography',
    logoUrl: 'http://fillmurray.com/80x80',
    titleImageUrl: 'http://fillmurray.com/800x600',
  };
  return responseData;
}

export function getPostList() {
  let responseData = [];
  
  return responseData;
}

export function updateBlogInfo(blogInfo) {
  return true;
}

export function getPostData(urlSlug) {
  let responseData = {};
  responseData.postTitle = 'Foo Bar';
  responseData.postContent = '<div>Hello World!</div>';
  return responseData;
}

export function addPost(post) {
  return true;
}
