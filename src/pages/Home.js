// import PostForm from "../components/PostForm";
// import Posts from "../components/Posts";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useContext } from 'react'
import { NameContext } from "../TheConText"
import { useSelector } from "react-redux"
import { AiFillLike, AiFillDislike } from "react-icons/ai"
import { MdComment } from "react-icons/md"
import Image from 'react-bootstrap/Image'
import Image1 from "../imgs/pexels-italo-melo-2379004.jpg"
import Image2 from "../imgs/2.jpg"
import Image3 from "../imgs/3.jpg"


function Home() {
  // selector
  const posts = useSelector(state => state.posts)
  const names = ["hamza", "ahmed" , "ibrahem","islam",4,5,6,7,8,9,]
  const img = [Image1,Image2 ,Image3]

  const { theme } = useContext(NameContext)
  // console.log(theme);

  return (
    <div className="bg-home b-st" style={theme}>
      {posts.map((post) => (
        <div className="mb-4 post-st" key={post.id} style={theme}>
          <Card style={theme} className="p-3">
            <Card.Title>
            <div className="img mx-3g">            
            <Image src={img[post.userId -1]}  width="50" />
            </div>
              <span>{names[post.userId -1]}</span>
            </Card.Title>
            <Card.Body>
              <Card.Title>{post.cardTitle}</Card.Title>
              <Card.Text>
                {post.body}
              </Card.Text>
              <Link to={"/postDetails/" + post.id}>Show Post Details</Link>
              <hr/>
              <div >
                <AiFillLike  className="ms-2"/>
                <span 
                  >
                  {post.upVotesTotal}
                  </span>
                <AiFillDislike className="ms-2"/>
                <span >
                  {post.downVotesTotal}
                </span>
                <MdComment className="ms-2"/>
                {post.comments.length}
              </div>
            </Card.Body>
          </Card>
        </div>))}
    </div>
  );
}

export default Home;
