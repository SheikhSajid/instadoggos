import React from 'react';
import BottomBar from '../BottomBar';
import { render, fireEvent } from '@testing-library/react';
import shuffle from 'shuffle-array';
import { fetchUrls } from '../../utils';

// mock-out the shuffle-array library
const shuffledArr = ['shuffled'];
jest.mock('shuffle-array');
shuffle.mockImplementation(() => shuffledArr);

// mock-out the app state
const imageUrls = ['url1', 'url2'];
const setImageUrls = jest.fn();
const setLoading = jest.fn();

jest.mock('../../utils');
const newUrls = ['Uno', 'Dos', 'Tres'];
fetchUrls.mockImplementation(() => Promise.resolve(newUrls));

describe('shuffle button', () => {
  afterEach(() => {
    setImageUrls.mockClear();
    shuffle.mockClear();
  });

  it('calls the shuffle method with the existing list of URLs', () => {
    // render the component
    const { getByTestId } = render(
      <BottomBar
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
        setLoading={setLoading}
      />
    );
    fireEvent.click(getByTestId('shuffle'));
    expect(shuffle).toHaveBeenCalledWith(imageUrls, { copy: true });
  });

  it('calls setImageUrls with a shuffled list of existing URLs', () => {
    // render the component
    const { getByTestId } = render(
      <BottomBar
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
        setLoading={setLoading}
      />
    );
    fireEvent.click(getByTestId('shuffle'));
    expect(setImageUrls).toHaveBeenCalledTimes(1);
    expect(setImageUrls).toHaveBeenCalledWith(shuffledArr);
  });
});

describe('reload button', () => {
  afterEach(() => {
    setImageUrls.mockClear();
    fetchUrls.mockClear();
  });

  it('calls fetchUrls to fetch a new set of URLs', () => {
    const { getByTestId } = render(
      <BottomBar
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
        setLoading={setLoading}
      />
    );
    fireEvent.click(getByTestId('reload'));
    expect(fetchUrls).toHaveBeenCalledTimes(1);
  });
});
