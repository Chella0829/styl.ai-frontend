import './Question.css';
import finish from '../../Assets/image/finish.png';
import rewrite from '../../Assets/image/rewrite.png';
const Question = () => {
    return (
        <div className="Question">
            <div className='quest'>
                <img src={finish} alt="" width={100} />
                <p>Finish</p>
            </div>
            <div className='quest'>
                <img src={rewrite} alt="" width={100} />
                <p>Re-Write</p>
            </div>
        </div>
    );
}

export default Question;