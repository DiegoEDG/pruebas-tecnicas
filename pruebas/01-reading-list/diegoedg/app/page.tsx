'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import library from '../data/books.json';
import { BookList } from '@/components';
import { BooksList } from '../interfaces';
import styles from './page.module.css';
import listIcon from '../public/list-icon.svg';

const HomePage = () => {
	const [books, setBooks] = useState(library as BooksList);

	return (
		<div className={styles['main-container']}>
			<div className={styles.navbar}>
				<h1 className={styles.title}>Library App</h1>
				<p className={styles.list}>
					List (6) <Image className={styles.icon} src={listIcon} alt="list-icon" width={20} height={20} />
				</p>
			</div>
			<BookList data={books} />
		</div>
	);
};

export default HomePage;
