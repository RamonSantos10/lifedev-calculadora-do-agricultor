import {Link} from "react-router-dom";
import styles from "./PostDetail.module.css"

const PostDetail = ({post}) => {
    return (
        <>
        <div className={styles.post}>
            <img src={post.image} alt={post.title}/>
            <h2>{post.title}</h2>
            <p className={styles.createdby}>por: {post.createdby}</p>
            <div className={styles.tags}>
                {post.tags.map((tags) => (
                    <p key={tag}>
                        <span>#</span>{tag}
                        </p>))}
            </div>
            <p className={styles.createdat}>data: {post.createdAt}</p>
            <link to={`/post/${post.id}`} className="btn btn-outline">
                Ler Postagem
            </link>
        </div>
        </>
    )
}