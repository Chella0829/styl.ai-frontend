import './Finalimages.css';
import ModalImage from 'react-modal-image';
import final1 from '../../Assets/image/final1.jpg';
import final2 from '../../Assets/image/final2.jpg';
import final3 from '../../Assets/image/final3.jpg';
import { useState } from 'react/cjs/react.development';

const Finalimages = () => {
    const [] = useState();
    return (
        <div className='Final'>
            <div className='finalimages'>
                <ModalImage style={{width:"30% !important"}} small={final1}
                    large={final1}
                    alt=""
                    hideDownload={true}
                    hideZoom={true}
                    className="modal-image" 
                    
                />
            </div>           
            <div className='finalimages'>
                <ModalImage small={final2}
                    large={final2}
                    alt=""
                    hideDownload={true}
                    hideZoom={true}
                    className="modal-image" 
                />
            </div>           
            <div className='finalimages'>
                <ModalImage small={final3}
                    large={final3}
                    alt=""
                    hideDownload={true}
                    hideZoom={true}
                    className="modal-image" 
                    
                />
            </div>           
        </div>
    );
}

export default Finalimages;