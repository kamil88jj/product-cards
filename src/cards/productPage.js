import React from 'react';
import './index.scss';
import sortArrow from './icons/arrowSort.svg';
import search from './icons/searchIcon.svg';
import leftArrow from './icons/left_icon.svg';
import rightArrow from './icons/right_icon.svg';
import {Collection} from './CollectionProducts';

const sort = [
    {"name": "по названию"},
    {"name": "по просмотрам"},
    {"name": "по дате начала"},
    {"name": "по дате окончания"}
];


    function ProductPage() {
        const [categoryId, setCategoryId] = React.useState(0);
        const [page, setPage] = React.useState(1);
        const [isLoading, setIsLoading] = React.useState(true);
        const [searchValue, setSearchValue] = React.useState('');
        const [collections, setCollections] = React.useState([]);

        React.useEffect(() => {
            setIsLoading(true)

            const category = categoryId ? `category=${categoryId}` : '';

            fetch(`https://63d104e43f08e4a8ff8ea462.mockapi.io/cards?page=${page}&limit=4&${category}`)
                .then((res) => res.json())
                .then((json) => {
                    setCollections(json);
                })
                .catch(err => {
                    console.warn(err);
                    alert('Ошибка при получении данных');
                }) 
                .finally(() => setIsLoading(false));
        },[categoryId, page])


    return (
    <div className="App">
        <h1 className='title'>Карточки контента</h1>
            <div className="top">
                <h1 className='sorting'>Сортировать:</h1>
                    <ul className="tags">
                        {
                            sort.map((obj, i)=> 
                            <li 
                                onClick={() => setCategoryId(i)}
                                className={categoryId === i ? 'active' : ''} 
                                key={obj.name}>
                                    {obj.name} 
                                <img height={16} src={i === 0 ? sortArrow : ''} alt=''></img>
                            </li>)
                        }
                    </ul>
                <div className='search'>
                    <input 
                        value={searchValue}  
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="search-input" 
                        placeholder="Поиск..." 
                    />
                    <img className='search-icon' height={16} src={search} alt="search" />
                </div>
            </div>
        <ul className="pagination">
            <li ><img height={13} src={leftArrow} alt="leftArrow" /></li>
                {
                        [...Array(3)].map((_, i) => (
                        <li onClick={() => setPage(i + 1)} className={page === i + 1 ? 'active' : ''}>{i + 1}</li>
                ))}
            <li><img height={13} src={rightArrow} alt="leftArrow" /></li>
        </ul>
        <div className="content">
        <ul className='content__title'>
                    <li>Фото</li>
                    <li>Название</li>
                    <li>Просмотры</li>
                    <li>Начало ротации</li>
                    <li>Конец ротации</li>
                </ul>
                {isLoading ? (
                    <h3>loading...</h3>
                ) : (
                    collections.filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((obj, id) => (
                                <Collection key={id}
                                images={obj.image_url}
                                name={obj.name}
                                category={obj.category}
                                views={obj.views}
                                startDate={obj.start_date}
                                endDate={obj.end_date}
                                />
                        ))
                )}
        </div>
    </div>
    );
}

export default ProductPage;