import './home.css'
import {useState, useEffect} from 'react'
import Header from '../../header/Header'
import Sidebar from '../../sidebar/Sidebar'
import Post from '../../post/Post'
import Footer from '../../footer/Footer'
import Articles from '../Articles/Articles'
import {useLocation} from 'react-router'
import { axiosInstance } from '../../../config'
import Courosel from '../../courosel/Courosel'

function Home() {
    const [articles, setArticles] = useState([]);
    const location = useLocation();
    const{search} = location;

    useEffect(()=> {
const fetchArticle = async () =>{
    const res = await axiosInstance.get('/api/article'+search);
    setArticles(res.data);
}
fetchArticle();
    },[search])
    return (
        <div className="home">
            <Header/>
            <Courosel/>
            <div className="homeWrapper">
                <Sidebar/>
                <div className="posts">
                <h1 style={{color:'rgb(221, 68, 94)', fontSize:'20px'}}>Stories <i class="fa-solid fa-book-open"></i></h1>
                    <Articles articles={articles}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
