import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './post.module.css';

type Author = {
    avatarUrl: string;
    name: string;
    role: string;
}

type Content = {
    id: number;
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

export function Post({ post }: PostProps) {
    // estado: variáveis que eu quero que o componente monitore
    const [comments, setComments] = useState(['Muito bom, parabéns!!']);
    const [newCommentText, setNewCommentText] = useState('');

    function handleCreateNewComment(event: FormEvent | Event) {
        event.preventDefault();
  
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event?.target.setCustomValidity('Esse campo é obrigatório.');
    }

    function deleteComment(commentToDelete: string) {
        // imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo valor (um novo espaço na memória)
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);
    }

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} alt={post.author.name} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>Publicado {publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
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