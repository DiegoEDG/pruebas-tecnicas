import { useFilters } from '../hooks';
import BookCard from './BookCard';
import styles from './BookList.module.css';

const BookList = () => {
	const { filteredBooks } = useFilters();

	return (
		<section className={styles.listContainer}>
			{filteredBooks.length > 1 ? (
				filteredBooks.map((book) => <BookCard key={book.title} book={book} />)
			) : (
				<h2>No results</h2>
			)}
		</section>
	);
};

export default BookList;
