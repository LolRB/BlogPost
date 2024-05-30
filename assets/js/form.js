document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');
    const username = document.getElementById('username');
    const title = document.getElementById('title');
    const content = document.getElementById('content');
    const errorMessage = document.getElementById('error-message');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevents the default form submission behavior
  
      if (!username.value.trim() || !title.value.trim() || !content.value.trim()) {
        errorMessage.classList.remove('hidden');
      } else {
        errorMessage.classList.add('hidden');
        
         // Creates an object to store blog post data
      const postData = {
        username: username.value.trim(),
        title: title.value.trim(),
        content: content.value.trim(),
        date: new Date().toLocaleString() // Store submission date
      };

      // Retrieves existing posts from localStorage or initialize an empty array
      let posts = JSON.parse(localStorage.getItem('posts')) || [];

      // Adds new post data to the array
      posts.push(postData);

      // Stores the updated array back to localStorage
      localStorage.setItem('posts', JSON.stringify(posts));

      // Clears form fields after submission
      form.reset();

      // Redirects to blog.html
      window.location.href = 'blog.html';
      }
    });
  });