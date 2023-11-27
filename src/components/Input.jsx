function Input ({onAddTask}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        const description = formData.get('description');
        onAddTask(description);
        
        event.target.reset();
    };
    return (
        <form onSubmit={handleSubmit}>
            <input className="input" 
            type="text" 
            name="description" 
            id="description" 
            aria-label="Agregar Tarea" 
            required />
            <button className="btn btn-primary btn-submit " type="submit">Agregar</button>
        </form>
    )
}

export default Input;