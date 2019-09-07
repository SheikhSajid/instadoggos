import { fetchUrls } from './utils';

describe('utils', () => {
  describe('fetchUrls', () => {
    // mock the fetch API
    global.fetch = jest.fn();
    fetch
      .mockReturnValueOnce(
        Promise.resolve({ json: () => Promise.resolve({ url: 'url.psd' }) })
      )
      .mockReturnValue(
        Promise.resolve({ json: () => Promise.resolve({ url: 'url.jpg' }) })
      );

    afterEach(() => {
      fetch.mockClear();
    });

    it('Ignores unknown extensions and retries', async () => {
      await fetchUrls();
      // the first url has a 'psd' extension, so it gets ignored and
      // fetch is called 1 additional time (8+1)=9
      expect(fetch).toHaveBeenCalledTimes(9);
    });

    it('Returns 8 URLs in an array', async () => {
      let urls = await fetchUrls();
      expect(urls).toEqual([
        'url.jpg',
        'url.jpg',
        'url.jpg',
        'url.jpg',
        'url.jpg',
        'url.jpg',
        'url.jpg',
        'url.jpg'
      ]);
    });
  });
});
