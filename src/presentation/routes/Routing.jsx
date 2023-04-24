import { Route, Routes } from 'react-router-dom';
import Home from '../modules/Home/containers/Home';
import TestRoute from '../modules/TestRoute/containers/TestRoute';

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/test" element={<TestRoute />} />
    </Routes>
  );
};

export default Routing;
