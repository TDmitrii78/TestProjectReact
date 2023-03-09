import "./app-filter.css";

const AppFilter = () => {
    return (
        <div className="btn-group">
            <batton 
                className="btn btn-light"
                type="button">
                Все сотрудники
            </batton>
            <batton 
                className="btn btn-outline-light"
                type="button">
                На повышение
            </batton>
            <batton 
                className="btn btn-outline-light"
                type="button">
                З/П больше 1000$
            </batton>
        </div>
    );
}

export default AppFilter;