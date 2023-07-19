import { FC, PropsWithChildren } from 'react';
import { Book } from '../interfaces';
import styles from './BookCard.module.css';
import add from '../assets/add.svg';

interface Props {
	book: Book;
}

const BookCard: FC<PropsWithChildren<Props>> = ({ book }) => {
	return (
		<div className={styles.card}>
			<img className={styles.img} src={book.cover} />
			<div className={styles.infoContainer}>
				<div className={styles.titleContainer}>
					<h4>{book.title}</h4>
					<button className={styles.iconButton}>
						<img src={add} className={styles.icon} />
					</button>
				</div>
				<p className={styles.bookInfo}>
					{book.year}・{book.genre}
				</p>
				<p className={styles.bookInfo}> {book.author.name}</p>
				<p className={styles.synopsis}>{book.synopsis}</p>
			</div>
		</div>
	);
};

export default BookCard;
