import {Route,Routes} from 'react-router-dom';
import './main-panel.css'
const MainPanel = () => {
    return(
        <>
            <Routes>
                <Route path="/calendar"/>
                <Route path="/all"/>
                <Route path="/today"/>
                <Route path="/nextsevendays"/>
                <Route path="/nextmonth"/>
                <Route path="/completed"/>
                <Route path="/wontdo"/>
                <Route path="/trash"/>
                <Route path="/analitica"/>
                <Route path="/search"/>
            </Routes>
        </>
    )
}
export default MainPanel