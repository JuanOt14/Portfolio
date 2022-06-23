import './Home.css';
import Header from '../../Components/Header/header';
import profilePH from '../../Images/1.png';

const Home = () => {
    return (
        <div className='o-body'>
            <Header/>
            <div className='o-home-content'>
                <div className='o-intro'>
                    <div className='o-ph-content'>
                        <img src={profilePH} alt='PHprofile' id='ph-profile'/>
                    </div>
                    <div className='o-intro-text'>
                        
                    </div>
                </div>
                <section className='o-profile-content'>
                    hola mundo
                </section>
            </div>
        </div>
    )
}

export default Home;