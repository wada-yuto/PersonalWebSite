import { Link } from "react-router-dom"
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> My name is
                Yuto Wada
                <br/>
                Computer Science Student
                </h1>
                <h2>Kansas State University, Manhattan KS</h2>
                <Link to='/contact' className="flat-button">CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home