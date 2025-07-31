// script.js
document.addEventListener("DOMContentLoaded", function() {
    const collapsibles = document.querySelectorAll(".collapsible");
    collapsibles.forEach(btn => {
      btn.addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
      // Start closed
      const content = btn.nextElementSibling;
      if (content) content.style.maxHeight = null;
    });
  });

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchForm = document.querySelector('.search-bar');
  if (searchForm) {
    const searchInput = searchForm.querySelector('input');
    const searchButton = searchForm.querySelector('button');

    // Add placeholder text
    searchInput.placeholder = 'Search...';

    // Handle form submission
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const query = searchInput.value.trim();
      
      if (query) {
        // You can customize this search functionality
        // For now, we'll just show an alert with the search term
        alert(`Searching for: "${query}"`);
        
        // You could also redirect to a search results page:
        // window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
        
        // Or perform a search within the current page content
        // performPageSearch(query);
      }
    });

    // Handle search button click
    searchButton.addEventListener('click', function(e) {
      e.preventDefault();
      searchForm.dispatchEvent(new Event('submit'));
    });

    // Optional: Add search suggestions or autocomplete
    searchInput.addEventListener('input', function() {
      const query = this.value.trim();
      if (query.length > 2) {
        // You could implement autocomplete here
        // showSearchSuggestions(query);
      }
    });

    // Optional: Search within page content
    function performPageSearch(query) {
      const searchableElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, a');
      const results = [];
      
      searchableElements.forEach(element => {
        const text = element.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
          results.push(element);
        }
      });
      
      if (results.length > 0) {
        // Highlight or scroll to first result
        results[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        results[0].style.backgroundColor = 'rgba(255, 65, 82, 0.1)';
        setTimeout(() => {
          results[0].style.backgroundColor = '';
        }, 2000);
      } else {
        alert('No results found for: "' + query + '"');
      }
    }
  }
});

// Awareness page channel info logic
document.addEventListener('DOMContentLoaded', function() {
  const categoryBlocks = document.querySelectorAll('.category-block[data-category]');
  const infoBlocks = document.querySelectorAll('.channel-info');
  
  let activeInfo = null;
  categoryBlocks.forEach(block => {
    block.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      const infoId = 'info-' + category;
      const infoBlock = document.getElementById(infoId);
      
      if (!infoBlock) return;
      // If already active, hide it
      if (activeInfo === infoBlock) {
        infoBlock.classList.remove('active');
        activeInfo = null;
        return;
      }
      // Hide all
      infoBlocks.forEach(b => b.classList.remove('active'));
      // Show selected
      infoBlock.classList.add('active');
      activeInfo = infoBlock;
    });
  });
});