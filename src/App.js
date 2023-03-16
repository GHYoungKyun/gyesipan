import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import List from './list';
import Edit from './edit';
import Write from './write';
import View from './view';

const App = () => {
  return (
      <div>
          <ul>
              <li>
                  <Link to="/list">게시판으로 가기</Link>
              </li>
          </ul>
          <hr />
          <Routes>
              <Route path="/list" element={<List />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/write" element={<Write />} />
              <Route path="/view" element={<View />} />
          </Routes>
      </div>

  );
};

export default App;
