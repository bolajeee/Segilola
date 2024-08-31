import { Navbar, Hero, About, Collection, Subscribe, Footer } from "../components";


const Home = () => {
    return (
    
    <div className="header">
        <Navbar />
        <Hero />
        <About/>
        <Collection />
        <Subscribe />
        <Footer />
    </div>
  );
}

export default Home