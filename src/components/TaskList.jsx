function TaskList (tareas) {
    return (
        <div>
            <ul>
                {tareas.tareas.map((tarea) => (
                    <li key={tarea.id}>
                        {tarea.description}
                        {tarea.isCompleted ? "✅" : "❌"}
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default TaskList;