import './Folder.css';
import upload from '../../Assets/image/upload.png';
import question from '../../Assets/image/question.png';
import final from '../../Assets/image/final.png';
import { Link } from 'react-router-dom';

const Folder = () => {
    return (
        <div className="Folder">
            <div className='upload'>
                {/* <i class="fa fa-cloud-upload icon icon-upload" aria-hidden="true"></i> */}
                <Link to="/folder/upload">  <img src={upload} alt="" width={100} /></Link>
                <p>Upload</p>
            </div>
            <div className='upload'>
                <Link to="/folder/question"> <img src={question} alt="" width={100} /></Link>               
                {/* <i class="fa fa-cloud-download icon icon-qa" aria-hidden="true"></i> */}
                <p>QA</p>
            </div>
            <div className='upload'>
            <Link to="/folder/final-images"> <img src={final} alt="Logo-Missing" width={100} /></Link>
                {/* <i class="fa fa-question-circle icon icon-download" aria-hidden="true"></i> */} 
                <p>Final</p>
            </div>
        </div>
    );
}

export default Folder;