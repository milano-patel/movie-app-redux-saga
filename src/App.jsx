import HeaderComp from './components/HeaderComp';
import MovieContainer from './components/MovieContainer';
import { useEffect } from 'react';
import { getMoviesFetch } from './store/slices/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getMoviesFetch(null));
  }, []);

  return (
    <>
      <HeaderComp />
      {Object.keys(data).length ? (
        <>
          <MovieContainer movieData={data} />
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
}

export default App;

// if (isLoading) {
//   return <p>Loading...</p>;
// }
// if (error) {
//   return <div>Error fetching data...</div>;
// }
