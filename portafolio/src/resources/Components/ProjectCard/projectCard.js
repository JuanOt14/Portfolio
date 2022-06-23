import './projectCard.css';
import PrjtIMG from '../../Images/test.jpg';

const ProjectCard = () => {
    return (
        <div className='o-card-project'>
            <div className='o-card-text'>
                <h3>Project Name</h3>
                <p>Project info</p>
            </div>
            <div className='o-card-img'>
                <img src={PrjtIMG} alt='ProjectImg' id='ph-card'/>
            </div>
        </div>
    )
}

export default ProjectCard;