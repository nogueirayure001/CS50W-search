function searchBoxAnimationVisibilityHandler() {
  const searchBox = document.querySelector('#search-box');
  const searchBoxLabel = document.querySelector('label[for="search-box"]');

  searchBox.addEventListener('focus', () => {
    searchBoxLabel.style.display = 'none';
  });

  searchBox.addEventListener('blur', () => {
    if (!searchBox.value) {
      searchBoxLabel.style.display = 'block';
    }
  });
}

export default searchBoxAnimationVisibilityHandler;
