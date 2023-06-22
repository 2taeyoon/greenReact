import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
//import { search } from '../api/youtube';
import FakeYoutube from '../api/fakeYoutube';

const Video = () => {
    // const params = useParams();
    // const keyword = params.keyword;
    const { keyword } = useParams();
    
    const { isLoading, error, data:videos } = useQuery(['videos', keyword],
        ()=>{
            const youtube = new FakeYoutube()
            return youtube.search(keyword)
        }
    )
    
    console.log('videos',videos);

    /*
        const { isLoading, error, data } = useQuery([], fuc, options)
    */

    console.log('params',keyword)
    
    return (
        <>
            <div>Videos - { keyword ? ` 🔍 ${keyword}` : '🔥 인기동영상'}</div>
            {/* keyword가 있을 때 / 없을 때 */}
            { isLoading && <p>Loading...</p> }
            { error && <p>error...</p> }
            { videos && (
                <ul>
                    { videos.map((video) => (
                        <VideoCard key={video.id} video={video}/>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Video;