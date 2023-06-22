import { useCallback, useEffect, useState } from 'react';
import './App.scss';
import MovieList from './components/MoviesList';
import AddMovie from './components/AddMovie';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoding, setIsLoding] = useState(false);
    const [error, setError] = useState(null); //에러 없는 상태


    const fetchMovieHandler = useCallback(async () => {
        setIsLoding(true);
        setError(null);

        try {
            const response = await fetch('https://app-movie-test-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json');

            if (!response.ok) {
                throw new Error("에러 발생!!!!"); //뒷 부분 진행 안됨
            }

            const data = await response.json();
            //console.log('받아온 data?',data)
            //->파이어베이스에서 받아오 파일을 변환시킨 것이 객체

            const loadMovies = []  //받아온 객체를 배열로

            for (const key in data) {
                loadMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate,
                })
            }
            //console.log('loadMovies?',loadMovies)

            // const transformedMovies = data.results.map((movieData)=>{
            //   return {
            //     id:movieData.episode_id,
            //     title:movieData.title,
            //     openingText:movieData.opening_crawl,
            //     releaseDate:movieData.release_date
            //   }  //필요한 4개만 새로운 객체로 반환
            // }); 
            setMovies(loadMovies);

        } catch (error) {
            setError(error.message)
        }
        setIsLoding(false);
    }, []);

    useEffect(() => {
        fetchMovieHandler()
    }, [fetchMovieHandler])
    //fetchMovieHandler함수가 호출될때도 발생
    //함수는 외부에서 바뀔수 있음(변수를 받아온다거나)-> 무한루프 가능성 있음
    // useCallback(함수정의,[])

    const addMovieHandler = (movie) => {
        fetch('https://app-movie-test-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json', {
            method: "POST",  //firebase에 리소스를 만듬
            body: JSON.stringify(movie), //js객체를 json으로 바궈줌
            headers: { "Content-Type": "application/json" } //firebase에서는 생략 가능, API에서 어떤 컨텐츠가 전달되는지 알수 있게 해줌
        })
    }

    let content = <p>FOUND NO MOVIES.</p>;
    if (isLoding) {
        content = <p>LOADING...</p>
    }
    if (movies.length !== 0) {
        content = <MovieList movie={movies} />
    }
    if (error) {
        content = <p>{error}</p>
    }

    return (
        <main>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={fetchMovieHandler}>Fetch Movie</button>
            </section>
            <section>
                {content}
            </section>
        </main>
    );
}

export default App;
