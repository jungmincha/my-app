import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';

const BoardList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/boards');
                setPosts(response.data);
            } catch (error) {
                console.error('게시글 목록 조회 실패:', error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h2>게시글 목록~~</h2>
            <Link to="/write">글쓰기</Link>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BoardList;