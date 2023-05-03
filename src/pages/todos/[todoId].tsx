import Link from "next/link";

export async function getStaticProps(context: any) {
    const { params } = context;

    const data = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
    );

    const todo = await data.json();

    return { props: { todo } };
}

export async function getStaticPaths() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

    const data = await response.json();

    const paths = data.map((todo: any) => {
        return {
            params: {
                todoId: `${todo.id}`,
            },
        };
    });

    return { paths, fallback: false };
}

export default function Todo({ todo }: any) {
    return (
        <>
            <Link href="/todos">Voltar</Link>
            <h1>Exibinto o todo: {todo.id}</h1>
            <h3>Texto: {todo.title}</h3>
            <p>
                Comentário: la la la...
                <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link>
            </p>
            <p>
                Comentário: la la la...
                <Link href={`/todos/${todo.id}/comments/2`}>Detalhes</Link>
            </p>
            <p>
                Comentário: la la la...
                <Link href={`/todos/${todo.id}/comments/3`}>Detalhes</Link>
            </p>
        </>
    );
}
