import {Route, Routes} from 'react-router-dom';
import Guests from '../pages/Guests';


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Guests />} />
        </Routes>
    );
};

export default Router;