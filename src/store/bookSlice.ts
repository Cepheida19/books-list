import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


type Book = {
  id: number
  uuid: string
  cover_url: string
  url: string
  title: string
}

type BooksState = {
  books: Book[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: BooksState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('/foundation/api/arts/facets?is_for_pda=false&limit=24&o=new&offset=0');
  return response.data.payload.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    sortBooksByTitle: (state) => {
      state.books.sort((a, b) => a.title.localeCompare(b.title));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});
export const { sortBooksByTitle } = booksSlice.actions;

export default booksSlice.reducer;