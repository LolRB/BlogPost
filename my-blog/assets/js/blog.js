document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');
    const backButton = document.getElementById('back-button');
  
    // Fetch posts from localStorage
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
  
    // Render posts
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
  
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p><strong>${post.username}</strong> - ${post.date}</p>
        <p>${post.content}</p>
      `;
  
      postsContainer.appendChild(postElement);
    });
  
    // Add event listener to the back button
    backButton.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  });