import "./app-info.css";

const AppInfo = (props) => {
    const  {quantity, increase} = props;

    return (
            <div className="app-info">
            <h1>Учет сотрудников в компании.</h1>
            <h2>Общее число сотрудников: {quantity}</h2>
            <h2>Премию получат: {increase}</h2>
        </div>
    );
}

export default AppInfo;