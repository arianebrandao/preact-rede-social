import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './post.module.css';

interface PostProps {
    author: {
        avatarUrl: string;
        name: string;
        role: string;
    };
    content: {
        id: number;
        type: string;
        content: string;
    }[];
    publishedAt: Date;
}

export function Post(props: PostProps) {
    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.author.avatarUrl} alt={props.author.name} />
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>Publicado {publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {props.content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.id}>{line.content}</p>
                    } else if (line.type == 'link') {
                        return (
                            <p key={line.id}>
                                <a href={`https://${line.content}`} target='_blank'>{line.content}</a>
                            </p>
                        );
                    }
                })}
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