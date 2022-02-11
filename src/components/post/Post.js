import './post.css'
import {Link} from 'react-router-dom'

function Post({article}) {
     {/*const PF = 'https://media-app2.herokuapp.com/images/'
     const PF = 'https://api.cloudinary.com/v1_1/dc86lmshz/image/upload/'*/}
    return (
        <div className="post">
        {article.photo &&  <img className="postImg"
         src={article.photo}
          alt=''/> }
            <h1>{article.title}</h1>
            <div className="desc">
                <p>{article.desc}
                  </p>
            </div>
            <div className="postfooter">
                  <h4><span>Writter:</span><b>{article.username}</b></h4>
                <p>{(article.updatedAt)} </p>
                 <Link to={`/article/${article._id}`} className="noLink">
                 <button className="moreBtn" >Read more</button>
                   </Link>
            </div>
        </div>
    )
}

export default Post
