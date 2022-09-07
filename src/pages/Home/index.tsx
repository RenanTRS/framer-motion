import { Link } from 'react-router-dom';
import style from './Home.module.scss'

export const Home = () => {
  return (
    <div className={`${style.home} container`}>
      <h2>
        Welcome to Pizza Joint
      </h2>
      <Link to="/base">
        <button>
          Create Your Pizza
        </button>
      </Link>
    </div>
  )
}