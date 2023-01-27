import React from "react";


export const Collection = ({ name, category, images, views, startDate, endDate }) => {
    return (
        <div className="collection">
            <div className="collection__table">
                <div className='collection__products'>
                    <img src={images} alt="product"></img>
                    <div className='collection__subtitle'>
                        <h1 className='collection__subtitle-name'>
                            {name}
                        </h1>
                        <h2 className='collection__subtitle-category'>
                            {category}
                        </h2>
                    </div>
                    <div className='collection__block'>
                        <h1>{views}</h1>
                    </div>
                    <div className='collection__block'>
                        <h1>{startDate}</h1>
                    </div>
                    <div className='collection__block'>
                        <h1>{endDate}</h1>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    );
}

