import './Home.css';
import Header from '../../Components/Header/header';
import profile from '../../Images/1.png';

const Home = () => {
    return (
        <div className='o-body'>
            <Header/>
            <div className='o-home-content'>
                <div className='o-intro'>
                    <image src={profile} alt='profile' id='ph-profile'/>
                    <div className='o-intro-text'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;