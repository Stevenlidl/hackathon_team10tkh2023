import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function Layout() {
    return (
        <footer>
            <NavBar />
            <Outlet />
            <Footer />
        </footer>
    )
}