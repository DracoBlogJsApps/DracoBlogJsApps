// eslint-disable-next-line
import {get, post, update, remove} from './requester';
import $ from 'jquery';
// import {joinTeam} from './user';

function loadPosts(callback) {
    get('appdata', 'posts', 'kinvey')
        .then(callback);
}

function loadRecentPosts(callback) {
    get('appdata','posts/?query={}&limit=5', 'kinvey')
        .then(callback);
}

function loadPostDetails(postId, onPostSuccess) {
    get('appdata', 'posts/' + postId, 'kinvey')
        .then(onPostSuccess);
}

function loadUsersDetails(postId, onUsersSuccess) {
    get('user', `?query={"post_id": "${postId}"}`, 'kinvey')
        .then(onUsersSuccess);
}

function loadTagsDetails(postId, onTagsSuccess) {
    get('appdata', `tags/?query={"post_id": "${postId}"}`, 'kinvey')
        .then(onTagsSuccess);
}

function loadCommentsDetails(postId, onCommentsSuccess) {
    get('appdata', `comments/?query={"post_id": "${postId}"}`, 'kinvey')
        .then(onCommentsSuccess);
}

function edit(postId, title, body, callback) {
    let postData = {
        title: title,
        body: body,
        author: sessionStorage.getItem('username')
    };
    update('appdata', 'posts/' + postId, postData, 'kinvey')
        .then(callback(true))
        .catch(callback(false));
}

function deletePost(postId, callback) {
    remove('appdata', 'posts/' + postId, 'kinvey')
        .then(callback(true))
        .catch(callback(false));
}

function create(title, body, callback) {
    let postData = {
        title: title,
        body: body,
        author: sessionStorage.getItem('username')
    };
    post('appdata', 'posts', postData, 'kinvey')
        .then(callback(true))
        .catch(callback(false));
        // .then((response) => {
        //     joinTeam(response._id, callback);
        // });
}

function create_comment(postId, body, callback) {
    let commentData =  {
        body: body,
        post_id: postId,
        author: sessionStorage.getItem('username')
    }
    $('.comment-field').text('');
    post('appdata', 'comments', commentData, 'kinvey')
        .then(callback(true))
        .catch(callback(true));
}

export {loadPosts, loadRecentPosts, loadPostDetails, loadUsersDetails, loadTagsDetails, loadCommentsDetails, edit, create, deletePost, create_comment};