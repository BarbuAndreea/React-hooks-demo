import { useState, useEffect } from "react";
import axios from 'axios'

function UseEffectFetchData() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    // const [fetchClick, setFetchClick] = useState(false); // with fetch button

    // const handleClick = () => {
    //     setFetchClick(true);
    // }

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        // setFetchClick(false);
    }, [id]) // aici se pune id pentru a se schimba postul dupa modificarea inputului

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            {/* <button onClick={handleClick}>Fetch Post</button> */}
            <h2>{post.title}</h2>
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    );
}

export default UseEffectFetchData;