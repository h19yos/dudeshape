import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Layout from './Layout';
import Home from './Home';
import NotFound from './NotFound';

function AppContent() {
    // const location = useLocation();

    // const hideNavAndFooter = location.pathname === '/login' || location.pathname === '/register';

    return (
        <div className="App">
            {/* {!hideNavAndFooter && <Header />} */}
            <Header />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
            <Footer />
            {/* {!hideNavAndFooter && <Footer />} */}
        </div>
    );
}

export default AppContent;