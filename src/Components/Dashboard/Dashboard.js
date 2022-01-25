import './Dashboard.css';
const Dashboard = () => {
    return (
        <div className='Dashboard'>
          
                <div className='single-price'>
                    <h1>Packages</h1>
                    <div className='price'>
                        <h2>Standard</h2>
                    </div>
                    {/* <a href='#'>View All</a> */}
                </div>
                <div className='single-price'>
                    <h1>No. of images</h1>
                    <div className='price'>
                        <h2>92</h2>
                    </div>
                    {/* <a href='#'>View All</a> */}
                </div>
                <div className='single-price'>
                    <h1>Expiry Date </h1>
                    <div className='price'>
                        <h2>18:08:2020</h2>
                    </div>
                    {/* <a href='#'>Select</a> */}
                </div>
          
        </div>
    );
}

export default Dashboard;
