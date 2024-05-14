import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainView from './views/MainView/MainView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CertificatesView from './views/СertificatesView/CertificatesView';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<Layout />} path="/">
                        <Route element={<MainView />} path="" />
                        <Route element={<CertificatesView />} path="certificates" />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
