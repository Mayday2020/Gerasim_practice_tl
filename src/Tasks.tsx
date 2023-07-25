export type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}
export type TasksType = {
    data: {
        title: string
        tasks: TaskType[]
        students: string[]
    }
}


export const Tasks: React.ComponentType<TasksType> = (props: TasksType) => {
    return (
        <div>
            <span>{props.data.title}</span>
            <ul>
                { props.data.tasks.map( t => <li key={t.taskId}>
                    <input type="checkbox" checked={t.isDone} />
                    <span>{t.title}</span>
                    <button onClick={ () => {} }> x </button>
                </li>)}
            </ul>
            <ul>
                {props.data.students.map( t => <li><span>{t}</span></li>)}
            </ul>
        </div>
    )
}