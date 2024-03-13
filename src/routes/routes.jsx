import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClienteList from '../pages/ClienteList';
import ClienteAdd from '../pages/ClienteAdd';

function MyRoutes() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<ClienteList />} />
          <Route path="/add" element={<ClienteAdd />} />
        </Routes>
      </Router>
    );
  }

export default MyRoutes