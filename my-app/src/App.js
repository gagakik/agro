
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
 <div className='navbar'>
            <nav>
                <ul>
                    <li><Link className='navi' to='/'>Home</Link></li>
                    <li><Link className='navi' to='/api'>Company List</Link></li>
                    <li><Link className='navi' to='/cards'>New Registration</Link></li>
                    <li><Link className='navi' to='/Registration'>Registration</Link></li>
                </ul>
            </nav>
            </div>
    </div>
  );
}
export default App;
