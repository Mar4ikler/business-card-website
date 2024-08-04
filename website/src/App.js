import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainView from './views/MainView/MainView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CertificatesView from './views/СertificatesView/CertificatesView';
import OfferView from './views/OfferView/OfferView';
import InfoView from './views/InfoView/InfoView';
import ReviewView from './views/ReviewView/ReviewView';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<Layout />} path="/">
                        <Route exact element={<MainView />} path="" />
                        <Route element={<InfoView />} path="info" />
                        <Route element={<CertificatesView />} path="certificates" />
                        <Route element={<OfferView />} path="offer" />
                    </Route>
                    <Route element={<ReviewView />} path='reviews' />
                </Routes>
            </Router>
        </>
    );
}

export default App;
