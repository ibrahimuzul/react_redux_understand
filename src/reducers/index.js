import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';// book reducer datası
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  books:BooksReducer,// state e book olarak booksreduceer datasını aldık
  activeBook: ActiveBook
  // reducer dataları burada state e yazılıyor
});

export default rootReducer;
