import { FC } from 'react';
import { Book } from '../interfaces';
import BookCard from './BookCard';
import styles from './BookList.module.css';

interface Props {
	books: Book[];
}

const BookList: FC<Props> = ({ books }) => {
	return (
		<section className={styles.listContainer}>
			{books.length === 0 ? <h2>No results</h2> : books.map((book) => <BookCard key={book.title} book={book} />)}
		</section>
	);
};

export default BookList;
