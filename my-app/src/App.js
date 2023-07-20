
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
    <div className='navbar'>
            <nav>
                <ul>
                    <li><Link className='navi' to='http://expo.com.ge/'>Back</Link></li>
                    <li><Link className='navi' to='/Registration'>Registration</Link></li>
                    <li><Link className='navi' to='/Edit'>Edit</Link></li>
                </ul>
            </nav>
          </div>
    </div>
  );
}
export default App;
