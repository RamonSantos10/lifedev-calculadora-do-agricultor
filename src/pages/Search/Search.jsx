import React from 'react'
import styles from './Search.module.css'

import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'
import PostDetail from '../../components/PostDetail'
import { Link } from 'react-route-dom'

const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const { document: posts } = useFetchDocuments("posts", search)
    return (
        <>
            <div className={styles.search_container}>
                <h1>Resultados encontrados para: {search}</h1>
                <div className="post-list">
                    {posts && postMessage.length === 0 && (
                        <>
                            <p> Não foram encontrados posts a partir da sua busca...</p>
                            <Link to="/" className="btn btn-dark">
                                Voltar
                            </Link></>
                    )}
                    {post && post.map((post) => <PostDetail key={post.id} post={posy} />)}
                </div>
            </div>
        </>

    )
}

export default Search