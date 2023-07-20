import { FC, useContext } from 'react';
import CrossIcon from '../assets/cross.svg';
import { StoreContext } from '../context';
import BookList from './BookList';
import styles from './List.module.css';

interface Props {
	hndlShowList: () => void;
}

const List: FC<Props> = ({ hndlShowList }) => {
	const { list } = useContext(StoreContext);

	return (
		<aside className={styles.listContainer}>
			<div className={styles.list}>
				<div className={styles.listHeader}>
					<h2>Reading List</h2>
					<button className={styles.closeButton} onClick={hndlShowList}>
						<img src={CrossIcon} style={{ width: 40, height: 40 }} />
					</button>
				</div>
				<BookList books={list} />
			</div>
		</aside>
	);
};

export default List;
