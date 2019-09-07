import React from 'react';
import BottomBar from '../BottomBar';
import { render, fireEvent } from '@testing-library/react';
import shuffle from 'shuffle-array';

// mock-out the shuffle-array library
const shuffledArr = ['shuffled'];
jest.mock('shuffle-array');
shuffle.mockImplementation(() => shuffledArr);

describe('BottomBar', () => {
  describe('shuffle button', () => {
    // mock-out the app state
    const imageUrls = ['url1', 'url2'];
    const setImageUrls = jest.fn();

    // render the component
    const { getByTestId } = render(
      <BottomBar imageUrls={imageUrls} setImageUrls={setImageUrls} />
    );

    // click on the shuffle button
    fireEvent.click(getByTestId('shuffle'));

    it('calls the shuffle method with the existing list of URLs', () => {
      expect(shuffle).toHaveBeenCalledWith(imageUrls, { copy: true });
    });

    it('calls setImageUrls with a shuffled list of existing URLs', () => {
      expect(setImageUrls).toHaveBeenCalledTimes(1);
      expect(setImageUrls).toHaveBeenCalledWith(shuffledArr);
    });
  });
});
