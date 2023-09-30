// import { Component } from "react";
import { Container } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from 'store/search/searchSlice';
import { getCarsThunk } from 'store/search/seacrhThunk';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setValue('katya have velyki byryri'));
    dispatch(getCarsThunk())
  }, [dispatch]);


  const value = useSelector((state) => state.search.value);
  const cars = useSelector((state) => state.search.cars);
  console.log(value)
  console.log(cars)

  return (
    <Container>
      <Searchbar />
      <ImageGallery></ImageGallery>
    </Container>
  );
};

export default App;
