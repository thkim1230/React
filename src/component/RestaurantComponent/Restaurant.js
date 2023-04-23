import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RestaurantInfo from './RestaurantInfo';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3em;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        witdh: 100%;
        padding-left: 1em;
        padding-right:1em;
    }
`;

const Restaurant =(props) =>{

    const [articles, setArticles] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = props.category === 'info' ? 'info' : `category=${props.category}`;
                const response = await axios.get(`https:// ${query}`);
                setArticles(response.data.articles);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);


    return(
        <>
            <NewsListBlock>
                    {articles && articles.map(article => (
                        <RestaurantInfo key={article.url} article={article} />
                    ))}
            </NewsListBlock>
        </>
    );
}

export default Restaurant;