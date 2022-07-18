import { useParams } from "react-router-dom"
import { Card, Alert, Button } from 'react-bootstrap'
import Comment from "../components/comment";
import {useSelector} from "react-redux"
import axios from 'axios';


function PostDeteils() {
    
    
    
    
    const { id } = useParams()
    const delete1 = ()=> {
        axios.delete('https://api.tawwr.com/posts/' + post.id ).then(() => console.log(post))
    }
    
    const cards = useSelector(state => state.posts)
    console.log({ id });
    const post = cards.find((card) => card.id)
    console.log(cards);
    return (
        <div>
            <div key={post.id} >
            <Button onClick={delete1}>
                delete
            </Button>
                <Card  >
                    <Card.Header>{post.userId}</Card.Header>
                    <Card.Body>
                        <Card.Title>{post.cardTitle}</Card.Title>
                        <Card.Text>
                            {post.body}
                        </Card.Text>
                        {post.comments.map(itm => (

                            <Alert variant="info" >
                                <b title="Source Title">User Id is:{itm.userId}</b>
                                <div>{itm.body}</div>
                            </Alert>

                        ))}
                        <Comment card={post} />

                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default PostDeteils 