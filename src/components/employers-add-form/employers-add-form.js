import "./employers-add-form.css";

const EmployersAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавить нового сотрудника</h3>
            <form className="add-form d-flex">
                <input type="text" 
                    placeholder="Как зовут"
                    className="form-control new-post-label"/>
            
                <input type="number" 
                    placeholder="З/П в $"
                    className="form-control new-post-label"/>
           
                <button type="submit" 
                    class="btn btn-outline-light">
                    Добавить
                </button>
            </form>
        </div>
    )
}

export default EmployersAddForm;