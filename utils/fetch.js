export async function fetchPopularMovies() {
	const popularMoviesFetch = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US`
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

export async function fetchMoviesByCategory(paramCategory) {
	const moviesByCategoryPromise = await fetch(
		`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${paramCategory}`
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
