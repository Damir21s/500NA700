import './newsMob.scss'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from './../../../picture/img1NewsMob.svg'
import img2 from './../../../picture/img2NewsMob.svg'
import img3 from './../../../picture/img3NewsMob.svg'
import img4 from './../../../picture/img4NewsMob.svg'
import img5 from './../../../picture/img5NewsMob.svg'
import img6 from './../../../picture/img6NewsMob.svg'
let NewsMob = () => {
    return (
        <section className='wrapper__news_container'>
            <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop
                centerMode centerSlidePercentage={(75)} >
                <div>
                    <div className='wrapper__img'><img alt="img1" src={img1} /></div>
                    <div className='wrapper__news_content'>
                        <h2>Заголовок</h2>
                        <p>ОписаниОписание Описание  Описание Описание Описание  Описаниее</p>
                    </div>
                </div>
                <div>
                    <div className='wrapper__img'><img alt="img2" src={img2} /></div>
                    <div className='wrapper__news_content'>
                        <h2>Заголовок</h2>
                        <p>ОписаниОписание Описание  Описание Описание Описание  Описаниее</p>
                    </div>
                </div>
                <div>
                    <div className='wrapper__img'><img alt="img3" src={img3} /></div>
                    <div className='wrapper__news_content'>
                        <h2>Заголовок</h2>
                        <p>ОписаниОписание Описание  Описание Описание Описание  Описаниее</p>
                    </div>
                </div>
                <div>
                    <div className='wrapper__img'><img alt="img4" src={img4} /></div>
                    <div className='wrapper__news_content'>
                        <h2>Заголовок</h2>
                        <p>ОписаниОписание Описание  Описание Описание Описание  Описаниее</p>
                    </div>
                </div>
                <div>
                    <div className='wrapper__img'><img alt="img5" src={img5} /></div>
                    <div className='wrapper__news_content'>
                        <h2>Заголовок</h2>
                        <p>ОписаниОписание Описание  Описание Описание Описание  Описаниее</p>
                    </div>
                </div>
                <div>
                    <div className='wrapper__img'><img alt="img6" src={img6} /></div>
                    <div className='wrapper__news_content'>
                        <h2>Заголовок</h2>
                        <p>ОписаниОписание Описание  Описание Описание Описание  Описаниее</p>
                    </div>
                </div>
            </Carousel>
        </section>
    )
}
export default NewsMob;