import { API_KEY, API_HOST } from "./config/secrets";

export const getMoviesByNameAndPage = (name, page) => {
  const url = `${API_HOST}/?apikey=${API_KEY}&s=${name}&page=${page}`

	return fetch(url)
		.then((response) => response.json())
		.catch((e) => {
			console.log(e)
			return {}
		})
}
