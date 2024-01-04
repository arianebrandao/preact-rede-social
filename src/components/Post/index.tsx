import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';

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
    // estado: variáveis que eu quero que o componente monitore
    const [comments, setComments] = useState(['Muito bom, parabéns!!']);
    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment(event: HTMLFormElement) {
        event.preventDefault();
  
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: HTMLFormElement) {
        event?.target.setCustomValidity('');
        setNewCommentText(event?.target.value);
    }

    function handleNewCommentInvalid(event: HTMLFormElement) {
        event?.target.setCustomValidity('Esse campo é obrigatório.');
    }

    function deleteComment(commentToDelete: string) {
        // imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    const isNewCommentEmpty = newCommentText.length === 0;

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

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment" 
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map( comment => {
                    return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                })}
            </div>
        </article>
    )
}