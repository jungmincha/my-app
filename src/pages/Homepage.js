import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>환영합니다. 여기는 메인홈입니다.</h1>
            <Link to="/board">--->게시판으로 이동</Link>
        </div>
    );
};

export default HomePage;