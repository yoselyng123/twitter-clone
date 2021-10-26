import './App.css';
import Board from './components/Board';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className='app'>
            <Sidebar />
            <Feed />
            <Board />
        </div>
    );
}

export default App;
