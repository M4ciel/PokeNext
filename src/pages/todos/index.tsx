import Link from "next/link";
import styles from "../../styles/Todos.module.css";

export async function getStaticProps() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");

    const todos = await data.json();

    return { props: { todos } };
}

export default function Todos({ todos }: any) {
    return (
        <>
            <h1>Tarefas a fazer</h1>
            <ul className={styles.todolist}>
                {todos.map((todo: any) => {
                    return (
                        <li key={todo.id}>
                            <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
