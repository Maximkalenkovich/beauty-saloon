import { Header } from "../layout/header/Header"
import { Main } from '../layout/section/main/Main';
import { Slogan } from '../layout/section/slogan/Slogan';
import { Service } from '../layout/section/service/Service';
import { Partners } from '../components/partners/Partners';
import { Works } from '../layout/section/works/Works';
import { Footer } from '../layout/footer/Footer';

export const MainPage = () => {
    return ( 
        <div className="App">
     <Header />
     <Main />
     <Slogan />
     <Service />
     <Partners />
     <Works />
     <Footer />

    </div>
    )
}