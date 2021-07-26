const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  };

export async function getMovies(){
    return fetch("http://localhost:3000/api/v1/movies?page=1&limit=10", {
      headers
    }).then(res => res.json());
}

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

export async function getMovie(id){
    return fetch(`http://localhost:3000/api/v1/movies/${id}`, {
      headers
    }).then(res => res.json());
    //   .then((data) => {
    //     console.log(">>>>>>>SUCCESSFULLY FETCHED >>>>>>", data);
    //     setMovieDetails(data);
    //     if(data.status === "RELEASED") setIsReleased(true)
    //   });
}


