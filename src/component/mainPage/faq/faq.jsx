import { useState } from 'react';
import './faq.scss'
let Faq = () => {
    const [selectItem1, setSelectItem1] = useState(false)
    const [selectItem2, setSelectItem2] = useState(false)
    const [selectItem3, setSelectItem3] = useState(false)
    return (
        <section className='wrapper__faq_block'>
            <div className='wrapper__faq'>
                <div><h1>FAQ</h1></div>
                <div className='wrapper__faq_descrip'>
                    <div className='line--first' />
                    <div className='wrapper__faq_descrip_item'>
                        <h2 onClick={() => { setSelectItem1(!selectItem1) }} >Как добраться до музея?</h2>
                        {selectItem1 && <p>В Национальный музей Республики Татарстан можно добраться общественным транспортом:<br />
                            1) «Станция метро «Кремлевская», а затем по направлению к Кремлю пройдя 5 минут пешком;</p>
                        }
                    </div>
                    <div className='line' />
                    <div className='wrapper__faq_descrip_item'>
                        <h2 onClick={() => { setSelectItem2(!selectItem2) }}>Есть ли поблизости удобная парковка?</h2>
                        {selectItem2 && <p>В Национальный музей Республики Татарстан можно добраться общественным транспортом:<br />
                            1) «Станция метро «Кремлевская», а затем по направлению к Кремлю пройдя 5 минут пешком;</p>
                        }
                    </div>
                    <div className='line' />
                    <div className='wrapper__faq_descrip_item'>
                        <h2 onClick={() => { setSelectItem3(!selectItem3) }}>Можно ли воспользоваться аудиогидом?</h2>
                        {selectItem3 && <p>В Национальный музей Республики Татарстан можно добраться общественным транспортом:<br />
                            1) «Станция метро «Кремлевская», а затем по направлению к Кремлю пройдя 5 минут пешком;</p>
                        }
                    </div>
                    <div className='line' />
                </div>
            </div>
        </section>
    )
}
export default Faq;