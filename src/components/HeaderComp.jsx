import { useState } from 'react';
import { addSearch } from '../store/slices/searchSlice';
import { getMoviesFetch } from '../store/slices/moviesSlice';
import { useDispatch } from 'react-redux';

const HeaderComp = () => {
  const [inputVal, setinputVal] = useState('');

  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setinputVal(e.target.value);
    dispatch(addSearch({ term: e.target.value }));
    dispatch(getMoviesFetch(e.target.value));
  };

  const goHome = () => {
    setinputVal('');
    dispatch(addSearch({ term: null }));
    dispatch(getMoviesFetch(''));
  };

  return (
    <header>
      <h2 onClick={goHome}>Movie Search App</h2>
      <form>
        <input
          type="text"
          id="search"
          className="search"
          placeholder="Type movie name..."
          value={inputVal}
          onChange={changeHandler}
        />
      </form>
    </header>
  );
};

export default HeaderComp;
