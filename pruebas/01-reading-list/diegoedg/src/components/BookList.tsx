import { useFilters } from '../hooks';
import BookCard from './BookCard';
import styles from './BookList.module.css';

const BookList = () => {
	const { filteredBooks } = useFilters();

	return (
		<div className={styles.listContainer}>
			{filteredBooks.map((book) => (
				<BookCard key={book.title} book={book} />
			))}
		</div>
	);
};

export default BookList;
