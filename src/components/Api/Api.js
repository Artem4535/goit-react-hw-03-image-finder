export function FetchPhoto(inputValue, page) {
  const key = '34736091-07dbf1d110e7bfeee2e88aa1e';
  const URL = `https://pixabay.com/api/?key=34736091-07dbf1d110e7bfeee2e88aa1e&q=${inputValue}&per_page=16$page=${page}`;
  const options = {
    q: inputValue,
    page: page,
  };

  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('sdfsd'));
  });
}
