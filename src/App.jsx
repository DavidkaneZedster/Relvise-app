import './App.css';
import {Brands,ClientCard,ContactUs,Footer,FooterAfter,GetInTouch,Header,PracticeCard,Solution,SolutionCard,TitleItem, WhoWeAre} from './components';


function App() {
    return (
        <div className='App'>
            <div className="container">
                <Header />
                <Solution />
                <SolutionCard />
            </div>
            <main className="Dark">
                <div className="container">
                    <TitleItem 
                        title={"Every Client Matters"}
                        subtitle={"Problems trying to resolve the  conflict between the two major realms of Classical physics: Newtonian mechanics"}
                    />
                    <ClientCard />
                    <TitleItem 
                        title={"Practice Advice"}
                        subtitle={"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"}
                    />
                    <PracticeCard />
                    <TitleItem 
                        title={"Who We Are"}
                        subtitle={"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"}
                    />
                    <WhoWeAre 
                        title={"the quick fox jumps over the lazy dog"}
                        subtitle={"Things on a very small scale ..."}
                    />
                    <Brands />
                    <TitleItem 
                        title={"Get In Touch"}
                        subtitle={"Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics"}
                    />
                    <GetInTouch 
                        text={"georgia.young@example.com"}
                        afterText={"georgia.young@ple.com"}
                        title={"Get Support"}
                        btn={"Submit Request"}
                    />
                    <ContactUs />
                </div>
            </main>
            <footer className="Footer">
                <div className="container">
                    <Footer />
                </div>
                <div className="Dark">
                    <div className="container">
                        <FooterAfter />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
