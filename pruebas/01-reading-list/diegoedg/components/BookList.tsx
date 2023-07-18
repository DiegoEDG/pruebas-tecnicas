import React, { FC } from 'react';
import { Book, BooksList } from '@/interfaces';
import BookCard from './BookCard';
import styles from './bookList.module.css';

interface Props {
	data: BooksList;
}

const BookList: FC<Props> = ({ data }) => {
	return (
		<main className={styles.booksContainer}>
			{data.library.map(({ book }) => (
				<BookCard key={book.title} book={book} />
			))}
		</main>
	);
};

export default BookList;
