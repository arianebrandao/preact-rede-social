import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './post.module.css';

interface PostProps {
    author: string;
    content: string;
}

export function Post(props: PostProps) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/arianebrandao.png" alt="Author profile pic" />
                    <div className={styles.authorInfo}>
                        <strong>Ariane Brandão</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="05 de setembro às 18:02h" dateTime='2022-09-05 18:02:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minima possimus, architecto eveniet accusantium non nihil impedit, harum ad fugit velit asperiores voluptatum! Unde illum maiores ab? Distinctio, ad illum.</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário' />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}