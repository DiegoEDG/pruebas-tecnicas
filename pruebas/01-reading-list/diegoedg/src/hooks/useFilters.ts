import { useContext, useEffect, useState } from 'react';
import { FiltersContext, StoreContext } from '../context';
import { Book } from '../interfaces';

export const useFilters = () => {
	const { genre, pages } = useContext(FiltersContext);
	const { books } = useContext(StoreContext);
	const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

	useEffect(() => {
		filterBook(genre, pages);
	}, [genre, pages, books]);

	const filterBook = (genre: string, pages: number) => {
		if (genre === '-' && pages >= 40) {
			setFilteredBooks(books.filter((book) => (book.pages >= pages ? book : null)));
		} else {
			setFilteredBooks(books.filter((book) => (book.genre === genre && book.pages >= pages ? book : null)));
		}
	};

	return { filteredBooks };
};
