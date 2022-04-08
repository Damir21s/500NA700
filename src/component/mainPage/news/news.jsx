import './news.scss'
import img1 from './../../../picture/img1News.svg'
import img2 from './../../../picture/img2News.svg'
import img3 from './../../../picture/img3News.svg'
import img4 from './../../../picture/img4News.svg'
import img5 from './../../../picture/img5News.svg'
import img6 from './../../../picture/img6News.svg'

let News = () => {
    return (
        <section className='container__news'>
            <h1>Новости</h1>
            <div className='wrapper__news'>
                <div className='wrapper__news_items'>
                    <div className='wrapper__news_item'>
                        <img alt="img" src={img1} />
                        <h2>Заголовок</h2>
                        <p>ОписаниОписание Описание  Описание Описание Описание  Описаниее</p>
                    </div>
                    <div className='wrapper__news_item'>
                        <img alt="img" src={img2} />
                        <h2>Заголовок</h2>
                        <p>ОписаниОписание Описание  Описание Описание Описание  Описаниее</p>
                    </div>
                    <div className='wrapper__news_item'>
                        <img alt="img" src={img3} />
                        <h2>Заголовок</h2>
                        <p>ОписаниОписание Описание  Описание Описание Описание  Описаниее</p>
                    </div>
                </div>
                <div className='wrapper__news_items'>
                    <div className='wrapper__news_item'>
                        <img alt="img" src={img4} />
                        <h2>Заголовок</h2>
                        <p>ОписаниОписание Описание  Описание Описание Описание  Описаниее</p>
                    </div>
                    <div className='wrapper__news_item'>
                        <img alt="img" src={img5} />
                        <h2>Заголовок</h2>
                        <p>ОписаниОписание Описание  Описание Описание Описание  Описаниее</p>
                    </div>
                    <div className='wrapper__news_item'>
                        <img alt="img" src={img6} />
                        <h2>Заголовок</h2>
                        <p>ОписаниОписание Описание  Описание Описание Описание  Описаниее</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default News;