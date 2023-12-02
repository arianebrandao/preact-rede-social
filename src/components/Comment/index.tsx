import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./comment.module.css";

export function Comment () {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/arianebrandao.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <div className={styles.commentHeader}>
                        <div className={styles.authorAndTime}>
                            <strong>Ariane Brandão</strong>
                            <time title="05 de setembro às 18:02h" dateTime='2022-09-05 18:02:00'>Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </div>

                    <p>Muito bom, parabéns!!</p>
                </div>

                <div className={styles.commentFooter}>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </div>
            </div>
        </div>
    );
}