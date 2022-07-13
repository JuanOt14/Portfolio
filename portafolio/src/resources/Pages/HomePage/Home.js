import './Home.css';
import Header from '../../Components/Header/header';
//import Nav from '../../Components/NavList/Nav';
import profilePH from '../../Images/1.png';
import { profileData } from '../../data/profile';

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
                        {profileData.map((data, key) => {
                            return (
                                <div key={key}>
                                    <h2>{data.name}</h2>
                                    <p>{data.age}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <section className='o-profile-content'>
                    <p>hola mundo</p>
                </section>
            </div>
        </div>
    )
}

export default Home;