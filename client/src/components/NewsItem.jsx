import { Link } from "react-router-dom"

const NewsItem = ({ id, title, url, index, by, currentPage }) => {
 return (
        <div className="node" key={id}>
            <p>{index+((currentPage-1)*30)}. <Link to={url} > <span>{title}</span> </Link></p>
            <p style={{paddingLeft:'17px'}}>by {by}</p>
        </div>
    )
}
export default NewsItem

// res.cookies
// servio
// lms()
// trascription for english 
// uploading youtube videos 

