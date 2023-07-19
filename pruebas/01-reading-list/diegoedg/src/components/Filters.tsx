import { useContext } from 'react';
import { FiltersContext } from '../context';
import { genres } from '../data/genres';
import styles from './Filters.module.css';

const Filters = () => {
	const { handleGenre, handleRange, pages } = useContext(FiltersContext);

	return (
		<section className={styles.filtersContainer}>
			<div className={styles.selectContainer}>
				<label htmlFor="genreFilter">Genre: </label>
				<select id="genreFilter" className={styles.select} onChange={handleGenre}>
					{genres.map((genre) => (
						<option key={genre}>{genre}</option>
					))}
				</select>
			</div>
			<div className={styles.rangeContainer}>
				<label htmlFor="pagesFilter">Pages: </label>
				<input type="range" id="pagesFilter" min="40" max="1200" onChange={handleRange} />
				<p>{pages}</p>
			</div>
		</section>
	);
};

export default Filters;
