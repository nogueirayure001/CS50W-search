function submitImageHandler() {
  const form = document.querySelector('.form');
  const baseURL = form['action'];

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchWord = new FormData(form).get('q');
    const fullURL = `${baseURL}?q=${searchWord}&tbm=isch`;

    window.open(fullURL, '_Blank');
  });
}

export default submitImageHandler;
