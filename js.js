import result from './data.js';
import data from './data.js';

// const enterID = document.getElementById('enterID')

// const enterButton = document.getElementById('enter')

// enterButton.addEventListener('click', insertData);

console.log(data);

// function insertData() {
//   localStorage.setItem("betkas", enterID.value)
//   console.log(enterID.value)


// for(let i in result) {
//     if (result[i].id == enterID){
//     console.log(result[i])
// }
// }
// }
// insertData();




const items = (() => {
    const fieldValue = localStorage.getItem('favorite_movies');
    
    return fieldValue === null
      ? []
      : JSON.parse(fieldValue);

  })();

 function getmovieById (movieId){
    const favorite_movies = data.find(movie => movie.id === movieId);
    return favorite_movies;
        
 }
//  console.log(getmovieById(436270));



 const setFavouriteMovie = () => {
    function tikrina() {
        const kintamasis_tikrinimui = localStorage.getItem("favorite_movies");
        if (kintamasis_tikrinimui === null) {
            return [];
        } else {
            return JSON.parse(kintamasis_tikrinimui);
        }
    }
    const movies_array = tikrina();

    const movie_from_file = getmovieById(436270);
    const new_movie = {
        id: movie_from_file.id,
        title: movie_from_file.title
    }
    movies_array.push(new_movie);
    
    localStorage.setItem('favorite_movies', JSON.stringify(movies_array));

}

// setFavouriteMovie();
// localStorage.clear();

const getFavouriteMovie = () => {
    const items = JSON.parse(localStorage.getItem('favorite_movies'))
    items.map(item => console.log(item.title))
    
}
getFavouriteMovie();



const removeFavouriteMovie = (moviesId) => {

        let kintamasis_tikrinimui2 = JSON.parse(localStorage.getItem("favorite_movies"));
        console.log(kintamasis_tikrinimui2)
        const index = kintamasis_tikrinimui2.findIndex(movie => movie.id === moviesId)
        console.log(index)

        if (index > -1) {
            kintamasis_tikrinimui2.splice(index, 1);
        }
        console.log(kintamasis_tikrinimui2)

        localStorage.setItem("favorite_movies", JSON.stringify(kintamasis_tikrinimui2));
        
}

// removeFavouriteMovie(436270)

