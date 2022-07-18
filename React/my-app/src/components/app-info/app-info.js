
import './app-info.css';

const AppInfo = (props) => {
    
    const {companyName, numberOfEmployees, numberofIncreased} = props;
    
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании {companyName}</h1>
            <h2>Общее число сотрудников: {numberOfEmployees}</h2>
            <h2>Приемию получат: {numberofIncreased}</h2>
        </div>
    )
}


export default AppInfo;