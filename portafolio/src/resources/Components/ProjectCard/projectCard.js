import './projectCard.css';
import PrjtIMG from '../../Images/test.jpg';

const ProjectCard = ({PrjtName,PrjtIntro}) => {
    return (
        <div className='o-card-project'>
            <div className='o-card-text'>
                <h3>{PrjtName}</h3>
                <p>{PrjtIntro}</p>
                <h3>Proyecto</h3>
                <p>Descripción</p>
            </div>
            <div className='o-card-img'>
                <img src={PrjtIMG} alt='ProjectImg' id='ph-card'/>
            </div>
        </div>
    )
}

export default ProjectCard;