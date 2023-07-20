import { useState, useContext } from 'react';
import { BookList, Filters, List } from './components';
import styles from './App.module.css';
import listIcon from './assets/list.svg';
import { useFilters } from './hooks';
import { StoreContext } from './context';

const App = () => {
	const { filteredBooks } = useFilters();
	const [showList, setShowList] = useState(false);
	const { list } = useContext(StoreContext);

	const hndlShowList = () => {
		setShowList((prev) => !prev);
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>
				<h1>Library App</h1>
				<div className={styles.header}>
					<h4 className={styles.listCounter}>List ({list.length})</h4>
					<button className={styles.iconButton} onClick={hndlShowList}>
						<img src={listIcon} style={{ width: 40, height: 40 }} />
					</button>
				</div>
			</div>
			{showList && <List hndlShowList={hndlShowList} />}
			<Filters />
			<BookList books={filteredBooks} />
		</div>
	);
};

export default App;
