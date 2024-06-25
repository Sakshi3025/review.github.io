document.addEventListener('DOMContentLoaded', function() {
    let posts = localStorage.getItem('posts');
    if (posts) {
        posts = JSON.parse(posts);
        const postsContainer = document.getElementById('postsContainer');

        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p class="author">- ${post.author}</p>
                
            `;

            postsContainer.appendChild(postElement);
        });
    }
});

