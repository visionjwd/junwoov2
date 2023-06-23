import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Component {...pageProps} />
    <Footer/>  
    </>
  );
}
