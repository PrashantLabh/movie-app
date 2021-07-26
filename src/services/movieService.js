const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  };

// GET LIST OF MOVIES BY PAGE NUMBER AND LIMIT
export async function getMovies(){
    return fetch("http://localhost:3000/api/v1/movies?page=1&limit=10", {
      headers
    }).then(res => res.json());
}

//GET LIST OF MOVIES BY FILTER ON RELEASE START DATE, RELEASE END DATE, ARTISTS, GENRE AND NAME
export async function getMoviesWithFilter(filters){
    let {releaseStartDate=null, releaseEndDate=null, artists=[], genre=[], name =null} = filters;
    const query = {
        page: 1,
        limit: 10,
        ...(releaseStartDate ? {start_date: releaseStartDate} : {}),
        ...(releaseEndDate ? {end_date: releaseEndDate} : {}),
        ...(artists.length > 0? {artists: artists.join(",")}: {}),
        ...(genre.length > 0? {genre: genre.join(",")}: {}),
        ...(name ? {title: name} : {})
      };
    var url = new URL("http://localhost:3000/api/v1/movies");
    Object.keys(query).forEach((key) =>
      url.searchParams.append(key, query[key])
    );
    return fetch(url, {
      headers
    }).then(res => res.json());
}

//GET MOVIE BY ID
export async function getMovie(id){
    return fetch(`http://localhost:3000/api/v1/movies/${id}`, {
      headers
    }).then(res => res.json());
}


//GET LIST OF GENRES
export async function getGenres(){
    return fetch(`http://localhost:3000/api/v1/genres`, {
      headers
    }).then(res => res.json());
}

//GET LIST OF ARTISTS
export async function getArtists(){
    return fetch(`http://localhost:3000/api/v1/artists?page=1&limit=10000`, {
      headers
    }).then(res => res.json());
}


