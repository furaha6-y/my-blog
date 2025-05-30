function loadPosts() {
    const stored = localStorage.getItem("posts");
    const blogContainer = document.getElementById('blog-posts');
    blogContainer.innerHTML = "";

    let posts = stored ? JSON.parse(stored) : [];

    posts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'blog-post';
        div.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
        blogContainer.appendChild(div);
    });
}

// Submit new post
document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    let posts = localStorage.getItem("posts");
    posts = posts ? JSON.parse(posts) : [];

    posts.unshift({ title, content });
    localStorage.setItem("posts", JSON.stringify(posts));

    document.getElementById('postForm').reset();
    loadPosts();
});

// Initial load
loadPosts();
