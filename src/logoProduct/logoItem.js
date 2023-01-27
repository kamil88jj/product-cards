import React from 'react';
import logo from './img/logo.jpg';
import photoProduct from './img/photologo.jpg';
import starsIcon from  './img/stars.png';
import ruble from './img/rub.png';

import './index.scss';

const LogoItem = () => {
    return (
        <div className='productBlock'>
            <a href="#">Назад</a>
                <div className='logoHead'>
                    <div className='logoHead__discount'>
                        <h1 className='logoHead__discount-percent'>55%</h1>
                        <div className='logoHead__discount-triangle'></div>
                    </div>
                    <div className='logoHead__icon'>
                        <img src={logo} alt="logo" />
                    </div>
                </div>
            <div className='logoBlock'>
                <div className='logoBlock__image'>
                    <img src={photoProduct} alt="product"/>
                </div>
                <div className='logoBlock__title'>
                    <h1>
                        Сухой корм для взрослых собак мелких и карликовых пород
                    </h1>
                </div>
                <div className='logoBlock__stars'>
                    <img src={starsIcon} alt="stars" />
                </div>
                <div className='logoBlock__price'>
                    <div className='logoBlock__price-num'>
                        <h1>359<sup>99</sup></h1>
                        <h2>цена по акции</h2>
                    </div>
                    <img src={ruble} alt="ruble" />
                </div>
                <div className='logoBlock__oldPrice'>
                    <div className='logoBlock__oldPrice-num'>
                        <div className='logoBlock__oldPrice-line'></div>
                        <h1>659<sup>99</sup>₽</h1>
                        <h2>старая цена</h2>
                    </div>
                </div>
            </div>
            <div className='logoFooter'>
                <h2>Акция действует <span>10.01.2023</span> по      <span>10.02.2023</span></h2>
            </div>
        </div>
    );
};

export default LogoItem;