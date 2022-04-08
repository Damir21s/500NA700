import './mainPage.scss'
import Swiper from './swiper/swiper'
import Faq from './faq/faq'
import Subscription from './subscription/subscription'
import News from './news/news'
import NewsMob from './newsMob/newsMob'
import useReactSimpleMatchMedia from 'react-simple-matchmedia'

let MainPage = () => {
    const matched = useReactSimpleMatchMedia('(max-width: 444px)');
    return (
        /*BEGIN MAIN*/
        <main>
            <div className='container'>
                <Swiper />
                <Faq />
                {!matched? <News /> :<NewsMob/> }
                <Subscription />
            </div>
        </main>
        /*END MAIN*/
    )
}
export default MainPage;