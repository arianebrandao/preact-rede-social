import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./comment.module.css";
import { useState } from "react";

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment ({content, onDeleteComment}: CommentProps) {
    const [likeCount, setLikeCount] = useState(2);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((estadoAtualDeLikeCount) => estadoAtualDeLikeCount + 1);
        // setLikeCount((estadoAtualDeLikeCount) => {
        //     return estadoAtualDeLikeCount + 1
        // });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/arianebrandao.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <div className={styles.commentHeader}>
                        <div className={styles.authorAndTime}>
                            <strong>Ariane Brandão</strong>
                            <time title="05 de setembro às 18:02h" dateTime='2022-09-05 18:02:00'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </div>

                    <p>{content}</p>
                </div>

                <div className={styles.commentFooter}>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}