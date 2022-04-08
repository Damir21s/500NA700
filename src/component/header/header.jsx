import './header.scss'
import logo from '../../picture/logo.svg'
import burger from '../../picture/burger.svg'
import closedBurg from '../../picture/closedBurg.svg'
import { useState } from 'react'
import useReactSimpleMatchMedia from 'react-simple-matchmedia'
let Header = () => {
    const matched = useReactSimpleMatchMedia('(max-width: 767px)');
    const [clickBurger, setClickBurger] = useState(false)
    const [select1, setSelect1] = useState(false)
    const [select2, setSelect2] = useState(false)
    const [select3, setSelect3] = useState(false)
    const [select4, setSelect4] = useState(false)
    const [select5, setSelect5] = useState(false)
    let func = (number) => {
        switch (number) {
            case 1: {
                setSelect2(false)
                setSelect3(false)
                setSelect4(false)
                setSelect5(false)
                setSelect1(!select1)
                break;
            }
            case 2: {
                setSelect1(false)
                setSelect3(false)
                setSelect4(false)
                setSelect5(false)
                setSelect2(!select2)
                break;
            }
            case 3: {
                setSelect1(false)
                setSelect2(false)
                setSelect4(false)
                setSelect5(false)
                setSelect3(!select3)
                break;
            }
            case 4: {
                setSelect1(false)
                setSelect2(false)
                setSelect3(false)
                setSelect5(false)
                setSelect4(!select4)
                break;
            }
            case 5: {
                setSelect1(false)
                setSelect2(false)
                setSelect3(false)
                setSelect4(false)
                setSelect5(!select5)
                break;
            }
        }

    }
    return (
        /*BEGIN HEADER*/
        <header>
            <div className='wrapper__header'>
                <div className='wrapper_logo'><img alt="logo" src={logo} /></div>
                <div>
                    <ul>
                        <div>
                            <li onClick={() => { func(1) }}>Пункт 1</li>
                            {select1 && <div className='select__item_line'></div>}
                        </div>
                        <div><li onClick={() => { func(2) }}>Пункт 2</li>
                            {select2 && <div className='select__item_line'></div>}
                        </div>
                        <div> <li onClick={() => { func(3) }}>Пункт 3</li>
                            {select3 && <div className='select__item_line'></div>}
                        </div>
                        <div><li onClick={() => { func(4) }}>Пункт 4</li>
                            {select4 && <div className='select__item_line'></div>}
                        </div>
                        <div>
                            <li onClick={() => { func(5) }}>Пункт 5</li>
                            {select5 && <div className='select__item_line'></div>}
                        </div>
                    </ul>
                </div>
                <div className='wrapper_burgermenu'>
                    <img onClick={() => { setClickBurger(!clickBurger) }} alt="burger-menu" src={clickBurger ? closedBurg : burger} />
                </div>
            </div>
            {matched && clickBurger && <div className='container__subburger'>
                <div className='wrapper__subburger'>
                    <ul>
                        <li onClick={()=>{setSelect1(!select1)}}>Пункт 1</li>
                        {select1 && <div className='wrapper__subburger_item_subitem'> 
                            <p>Подпункт меню1</p>
                            <p>Подпункт меню1</p>
                            <p>Подпункт меню1</p>
                            <p>Подпункт меню1</p>
                            <p>Подпункт меню1</p>
                        </div>}
                        <li>Пункт 2</li>
                        <li>Пункт 3</li>
                        <li>Пункт 4</li>
                        <li>Пункт 5</li>
                    </ul>
                </div>
            </div>}
            {!matched && <div>
                {select1 && <div className='wrapper__subheader'>
                    <div className='wrapper__subheader_items--right'>
                        <p>Подпункт меню1</p>
                        <p>Подпункт меню1</p>
                        <p>Подпункт меню1</p>
                    </div>
                    <div className='wrapper__subheader_items--left'>
                        <p>Подпункт меню1</p>
                        <p>Подпункт меню1</p>
                    </div>
                </div>}
                {select2 && <div className='wrapper__subheader'>
                    <div className='wrapper__subheader_items--right'>
                        <p>Подпункт меню2</p>
                        <p>Подпункт меню2</p>
                        <p>Подпункт меню2</p>
                    </div>
                    <div className='wrapper__subheader_items--left'>
                        <p>Подпункт меню2</p>
                        <p>Подпункт меню2</p>
                    </div>
                </div>}
                {select3 && <div className='wrapper__subheader'>
                    <div className='wrapper__subheader_items--right'>
                        <p>Подпункт меню3</p>
                        <p>Подпункт меню3</p>
                        <p>Подпункт меню3</p>
                    </div>
                    <div className='wrapper__subheader_items--left'>
                        <p>Подпункт меню3</p>
                        <p>Подпункт меню3</p>
                    </div>
                </div>}
                {select4 && <div className='wrapper__subheader'>
                    <div className='wrapper__subheader_items--right'>
                        <p>Подпункт меню4</p>
                        <p>Подпункт меню4</p>
                        <p>Подпункт меню4</p>
                    </div>
                    <div className='wrapper__subheader_items--left'>
                        <p>Подпункт меню4</p>
                        <p>Подпункт меню4</p>
                    </div>
                </div>}
                {select5 && <div className='wrapper__subheader'>
                    <div className='wrapper__subheader_items--right'>
                        <p>Подпункт меню5</p>
                        <p>Подпункт меню5</p>
                        <p>Подпункт меню5</p>
                    </div>
                    <div className='wrapper__subheader_items--left'>
                        <p>Подпункт меню5</p>
                        <p>Подпункт меню5</p>
                    </div>
                </div>}
            </div>}
        </header>
        /*END HEADER*/
    )
}
export default Header;