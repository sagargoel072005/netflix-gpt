
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.NowPlayingmovies); // ✅ Match the key

    if (!movies) return <div>Loading...</div>;
    if (movies.length === 0) return <div>No movies available</div>; // ✅ Empty state

    const mainMovie = movies[0];
    console.log(mainMovie);
    const { original_title, overview,id } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
};
export default MainContainer;




