import './Package.css';

const Package = () => {
    return (
        <div className='Package'>
            <div className='silverpage'>
                <div className='goldpage'>
                    <h1>Silver</h1>
                    <div className='diamondprice'>
                        <h2>Rs: 100</h2>
                    </div>
                </div>
                <div className='single-price'>
                    <h1>Gold</h1>
                    <div className='price'>
                        <h2>Rs: 100</h2>
                    </div>
                </div>
                <div className='single-price'>
                    <h1>Diamond </h1>
                    <div className='price'>
                        <h2>Rs: 100</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Package;