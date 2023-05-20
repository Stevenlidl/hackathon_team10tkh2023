import { Outlet } from 'react-router-dom';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function Layout() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}