import { FC, PropsWithChildren, useContext } from 'react';
import { Book } from '../interfaces';
import styles from './BookCard.module.css';
import addIcon from '../assets/add.svg';
import removeIcon from '../assets/remove.svg';
import { StoreContext } from '../context';

interface Props {
	book: Book;
}

const BookCard: FC<PropsWithChildren<Props>> = ({ book }) => {
	const { handleAddToList, list, hndlRemoveFromList } = useContext(StoreContext);

	return (
		<div className={styles.card}>
			<img className={styles.img} src={book.cover} />
			<div className={styles.infoContainer}>
				<div className={styles.titleContainer}>
					<h4>{book.title}</h4>
					{list.includes(book) ? (
						<button className={styles.iconButton} onClick={() => hndlRemoveFromList(book.title)}>
							<img src={removeIcon} className={styles.icon} />
						</button>
					) : (
						<button className={styles.iconButton} onClick={() => handleAddToList(book.title)}>
							<img src={addIcon} className={styles.icon} />
						</button>
					)}
				</div>
				<p className={styles.bookInfo}>{book.author.name}</p>
				<p className={styles.bookInfo}>
					{book.year}・{book.genre}・{book.pages} pages
				</p>
				<p className={styles.synopsis}>{book.synopsis}</p>
			</div>
		</div>
	);
};

export default BookCard;
