export async function fetchPopularMovies() {
	const popularMoviesFetch = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&include_adult=false`
	);
	const popularMovies = await popularMoviesFetch.json();
	return popularMovies;
}

export async function fetchAllCategories() {
	const allCategoriesFetch = await fetch(
		`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=en-US`
	);
	const allCategories = await allCategoriesFetch.json();
	return allCategories;
}

export async function fetchMoviesByCategory(paramCategory, paramPage = 1) {
	const moviesByCategoryPromise = await fetch(
		`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${paramCategory}&page=${paramPage}&include_adult=false`
	);
	const moviesByCategory = await moviesByCategoryPromise.json();
	return moviesByCategory;
}

export async function fetchMovieByID(paramID) {
	const movieByIDPromise = await fetch(
		`https://api.themoviedb.org/3/movie/${paramID}?api_key=${process.env.API_KEY}`
	);
	const movieByID = await movieByIDPromise.json();
	return movieByID;
}

export async function fetchMoviesBySearch(paramSearch, paramPage = 1) {
	const movieBySearchPromise = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${paramSearch}&page=${paramPage}&include_adult=false`
	);
	const movieBySearch = await movieBySearchPromise.json();
	return movieBySearch;
}
