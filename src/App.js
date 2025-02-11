import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Boardpage from './pages/Boardpage';
// import PostDetailPage from './pages/PostDetailPage';
// import WritePostPage from './pages/WritePostPage';
// import EditPostPage from './pages/EditPostPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/board" element={<Boardpage />} />
          {/*<Route path="/post/:id" element={<PostDetailPage />} />*/}
          {/*<Route path="/write" element={<WritePostPage />} />*/}
          {/*<Route path="/edit/:id" element={<EditPostPage />} />*/}
        </Routes>
      </Router>
  );
}

export default App;