import React, { FC } from 'react';
import Image from 'next/image';
import { Book } from '@/interfaces';
import addIcon from '../public/add-icon.svg';
import styles from './bookCard.module.css';

interface Props {
	book: Book;
}

const BookCard: FC<Props> = ({ book }) => {
	return (
		<div className={styles.card}>
			<div className={styles.imageContainer}>
				<Image className={styles.image} src={book.cover} alt={book.title} width={150} height={200} />
			</div>
			<div className={styles.infoContainer}>
				<div className={styles.titleContainer}>
					<h4 className={styles.title}>{book.title}</h4>

					<Image className={styles.icon} src={addIcon} alt="list-icon" width={30} height={30} />
				</div>
				<h5 className={styles.info}>
					{book.year}・{book.genre}
				</h5>
				<h5 className={styles.info}>{book.author.name}</h5>
				<p className={styles.info}>{book.pages} pages</p>
				<p className={styles.synopsis}>{book.synopsis}</p>
			</div>
		</div>
	);
};

export default BookCard;
