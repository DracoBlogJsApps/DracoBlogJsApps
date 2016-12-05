// eslint-disable-next-line
import {get, post, update, remove} from './requester';

function loadPosts(callback) {
    get('appdata', 'posts/?query={}&sort={"date":-1}', 'kinvey')
        .then(callback);
}

function loadRecentPosts(callback) {
    get('appdata','posts/?query={}&sort={"date":-1}&limit=5', 'kinvey')
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
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd
    }
    if(mm<10) {
        mm='0'+mm
    }
    today = mm+'/'+dd+'/'+yyyy;

    let postData = {
        title: title,
        body: body,
        author: sessionStorage.getItem('username'),
        date: today
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
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd
    }
    if(mm<10) {
        mm='0'+mm
    }
    today = mm+'/'+dd+'/'+yyyy;

    let postData = {
        title: title,
        body: body,
        author: sessionStorage.getItem('username'),
        date: today
    };
    post('appdata', 'posts', postData, 'kinvey')
        .then(callback(true))
        .catch(callback(false));
}

function create_comment(postId, body, callback) {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    if(dd<10) {
        dd='0'+dd
    }
    if(mm<10) {
        mm='0'+mm
    }
    today = mm+'/'+dd+'/'+yyyy;

    let commentData =  {
        body: body,
        post_id: postId,
        author: sessionStorage.getItem('username'),
        date: today
    };
    post('appdata', 'comments', commentData, 'kinvey')
        .then(callback(true))
        .catch(callback(true));
}

export {loadPosts, loadRecentPosts, loadPostDetails, loadUsersDetails, loadTagsDetails, loadCommentsDetails, edit, create, deletePost, create_comment};