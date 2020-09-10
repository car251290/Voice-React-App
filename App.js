import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

import logo from './images/logo.png';
import { NewsCards, Modal } from './components';
import useStyles from './styles';


//the API use for alan to start working with the command voice
const alanKey = '7dc620ff001075e69bb4920815e93c502e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newArticles, setNewsArticles] = useState([]);
    const [newArticles,setArticles]= useState([]);
    const [isOpen,setIsOpen]=useState([]);

    const classes = useStyles();

    useEffect(()=> {
        alanBtn({
            key : '7dc620ff001075e69bb4920815e93c502e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand:({command,articles}) => {

                if(command === 'newHeadlines'){
                    setNewsArticles(articles);
                    setArticles(-1);
                   
                } else if(command === 'instructions'){
                    setIsOpen(true);
                }else if (command === 'open'){
                    const parseNumber = number.length > 2 ? wordsToNumbers((number),{fuzzy:true}) : number;
                    const article = articles[parsedNumber - 1];
                    if(parseNumber > 20) {
                        alanBtn().playText('Please try that again...');

                    } else if (article) {
                        window.open(article.url,'_blank');
                        alanBtn().playText('Opening...');
                    } else {
                        alanBtn().playText('Please try that again...');
                    }

                }
            },
        });
    },[])
    return (
        <div>
            <div className ={classes.logoContainer}>
            {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}
         <img src="https://alan.app/voice/images/previews/preview.jpg" className={classes.alanLogo} alt="logo" />
            </div>
            <NewsCards articles={newsArticles} activeArticles={activeArtucle}/>
            <h1>Alan Ai new Application</h1>
           
            <NewsCards articles={newArticles}/>
            <Model isOpen={isOpen} setIsOpen={setIsOpen}/>
            {! newsArticles.length ?(
                <div className={classes.footer}>
                    <Typography variant = "body1" component="h2">
                        Created by 
                        <a className={classes.lin} href=""></a>
                        <a className={classes.lin} href=""></a>
                        </Typography>
                        
                        <img className={classes.image} src={logo} height="50px" alt="JSMastery logo" />
                        </div>
            ):null}            
        </div>

    );
    
}

export default App;