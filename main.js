// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle-header');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Blog category filtering
const categoryLinks = document.querySelectorAll('.category-list a');
const posts = document.querySelectorAll('.post-item');

categoryLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    categoryLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
    const category = this.getAttribute('data-category');
    posts.forEach(post => {
      const postCategory = post.querySelector('.post-category').textContent.trim().toLowerCase();
      if (category === 'all') {
        post.style.display = '';
      } else if (postCategory === category.replace('-', ' ')) {
        post.style.display = '';
      } else {
        post.style.display = 'none';
      }
    });
  });
});
