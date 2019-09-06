export async function fetchUrls() {
  let urlsFetched = [];

  while (urlsFetched.length !== 8) {
    try {
      const res = await fetch('https://random.dog/woof.json');
      const resBody = await res.json();
      const url = resBody.url;

      const ext = url
        .split('.')
        .pop()
        .toLowerCase();

      if (ext === 'jpg' || ext === 'png' || ext === 'gif' || ext === 'mp4') {
        urlsFetched.push(url);
      }
    } catch (e) {
      console.error(e);
      return urlsFetched;
    }
  }

  return urlsFetched;
}
