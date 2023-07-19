import styles from './App.module.css';
import { BookList, Filters } from './components';
import listIcon from './assets/list.svg';

const App = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.header}>
				<h1>Library App</h1>
				<div className={styles.header}>
					<h4 className={styles.listCounter}>List (5)</h4>
					<button className={styles.iconButton}>
						<img src={listIcon} style={{ width: 40, height: 40 }} />
					</button>
				</div>
			</div>
			<Filters />
			<BookList />
		</div>
	);
};

export default App;
