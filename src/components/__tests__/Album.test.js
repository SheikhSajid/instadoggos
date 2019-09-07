import React from 'react';
import Album from '../Album';
import { render } from '@testing-library/react';

describe('Album', () => {
  it('Renders all the images from the URLs in the imageUrls array', () => {
    const imageUrls = ['url1', 'url2', 'url3'];

    const { getByTestId } = render(<Album imageUrls={imageUrls} />);

    // There are 3 urls in imageUrls, so check if 3 instances of the image is being loaded
    getByTestId('url1');
    getByTestId('url2');
    getByTestId('url3');

    // Putting 'getByTestId' inside a loop causes the test to fail for some reason
    // urls.forEach(url => {
    //   getByTestId(url);
    // });
  });
});
