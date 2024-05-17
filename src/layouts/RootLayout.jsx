import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav';
import Footer from '../components/Footer';


export default function RootLayout() {
    return (
        <div bgColor='#D9D9D9'>
           
                <Nav />
                <Outlet />
                <Footer />
              
        </div>
    )
}