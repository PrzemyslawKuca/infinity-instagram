import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Post from "./components/Post/Post";
import Header from "./components/Header/Header";
import getUserData from "./api/UserAPI";

export type User = {
    name: {
        first: string,
        last: string
    },
    picture: {
        thumbnail: string
    },
    id: {
        name: string
        value: string;
    }
}

function App() {
    const [users, setUsers] = useState<[User]>();
    const scrollRef = useRef(null);

    useEffect(() => {
        fetchUserData()
    }, [])

    const handleScroll = (event: any) => {
        const target = event.target
        if (target.scrollHeight - target.scrollTop <= target.clientHeight) {
            setTimeout(() => fetchUserData(), 200)
        }
    }

    const fetchUserData = () => {
        getUserData().then((res) => {
            setUsers((prevUsers) => prevUsers ? [...prevUsers, ...res.results] : res.results)
        })
    }

    return (
        <div className="app" onScroll={handleScroll} ref={scrollRef}>
            <Header/>
            <div className={'content'}>
                {users && users.map((user, index) => {
                    return <Post user={user} key={index}/>
                })}
                <div className={'loading'}>Loading...</div>
            </div>
        </div>
    );
}

export default App;
