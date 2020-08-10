import React from 'react';

import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';


const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, activeArticle, i }) => {
    return (
        <div>
          News Card
        </div>
    )
}

export default NewsCard;