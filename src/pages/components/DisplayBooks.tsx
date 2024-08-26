import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchBooks, sortBooksByTitle } from '../../store/bookSlice';
import styles from './DisplayBooks.module.scss'

export const DisplayBooks = () => {

  const dispatch = useAppDispatch();
  const { books, status, error } = useAppSelector((state) => state.books);

  const removeDuplicates = (booksArray: typeof books) => {
    const seenTitles = new Set<string>();
    const uniqueBooks = booksArray.filter((book) => {
      const isDuplicate = seenTitles.has(book.title);
      seenTitles.add(book.title);
      return !isDuplicate;
    });
    return uniqueBooks;
  };

  const uniqueBooks = removeDuplicates(books);

  const handleSortByTitle = () => {
    dispatch(sortBooksByTitle());
  };
  const handleDeleteSort = () => {
    dispatch(fetchBooks());
  }

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        Список книг
      </div>
      <div className={styles['body']}>
        <div className={styles['buttons-block']}>
          <button onClick={handleSortByTitle}>
            Сортировать по алфавиту
          </button>
          <button onClick={handleDeleteSort}>
            Без сортировки
          </button>
        </div>

        <div className={styles['list']}>
          {uniqueBooks?.map((book) => (
            <div className={styles['item']} key={book.id}>
              {book.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}