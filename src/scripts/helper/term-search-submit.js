function submitTermHandler() {
  const form = document.querySelector('.form');
  const baseURL = form['action'];

  form.addEventListener('submit', (e) => {
    const { submitter } = e;

    if (submitter['dataset']['submitter'] === 'lucky') {
      e.preventDefault();

      const searchWord = new FormData(form).get('q');
      const fullURL = `${baseURL}?q=${searchWord}&btnI=I'm+Feeling+Lucky`;

      window.open(fullURL, '_Blank');
    }
  });
}

export default submitTermHandler;
