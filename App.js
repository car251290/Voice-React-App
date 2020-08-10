import React,{ useState,useEffect }from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards'
//the API use for alan to start working with the command voice
const alanKey = '7dc620ff001075e69bb4920815e93c502e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
    const [newArticles, setNewsArticles] = useState([])



    useEffect(()=> {
        alanBtn({
            key : alanKey,
            onCommand:({command,articles}) => {

                if(command === 'newHeadlines'){
                   
                    setNewsArticles(articles);
                }
            }
        })
    },[])
    return (
        <div>
            <h1>Alan Ai new Application</h1>
           
            <NewsCards articles={newArticles}/>

            
        </div>

    );
    
}

export default App;