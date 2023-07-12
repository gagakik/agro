
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
    <div className='navbar'>
            <nav>
                <ul>
                    <li><Link className='navi' to='http://expo.com.ge/'>Back</Link></li>
                    <li><Link className='navi' to='/api'>Company List</Link></li>
                    <li><Link className='navi' to='/Registration'>Registration</Link></li>
                </ul>
            </nav>
          </div>
    </div>
  );
}
export default App;
