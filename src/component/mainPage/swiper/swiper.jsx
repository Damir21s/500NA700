import img1 from '../../../picture/img1.svg'
import img2 from '../../../picture/img2.svg'
import img3 from '../../../picture/img3.svg'
import img1Mob from '../../../picture/img1Mob.svg'
import img2Mob from '../../../picture/img2Mob.svg'
import img3Mob from '../../../picture/img3Mob.svg'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import useReactSimpleMatchMedia from 'react-simple-matchmedia'
import "./swiper.scss"
let Swiper = () => {
    const matched = useReactSimpleMatchMedia('(max-width: 767px)');
    return (
        <section className='wrapper__swiper'>
            {!matched ? (
                <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop
                    centerMode centerSlidePercentage={(80)} >
                    <div>
                        <div className='wrapper__img'><img alt="img1" src={img1} /></div>
                    </div>
                    <div>
                        <div className='wrapper__img'><img alt="img2" src={img2} /></div>
                    </div>
                    <div>
                        <div className='wrapper__img'><img alt="img3" src={img3} /></div>
                    </div>
                </Carousel>
            ) : (
                <Carousel showThumbs={false} showStatus={false} showIndicators={false} infiniteLoop >
                    <div>
                        <div className='wrapper__img'><img alt="img1" src={img1Mob} /></div>
                    </div>
                    <div>
                        <div className='wrapper__img'><img alt="img2" src={img2Mob} /></div>
                    </div>
                    <div>
                        <div className='wrapper__img'><img alt="img3" src={img3Mob} /></div>
                    </div>
                </Carousel>
            )
            }
        </section>
    )
}
export default Swiper;