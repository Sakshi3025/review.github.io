document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const author = document.getElementById('author').value;

    const post = {
        id: new Date().getTime(), // Unique identifier for the post
        title: title,
        content: content,
        author: author
    };

    let posts = localStorage.getItem('posts');
    if (posts) {
        posts = JSON.parse(posts);
    } else {
        posts = [];
    }

    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href = 'post.html';
});
