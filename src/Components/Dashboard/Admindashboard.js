import './Admindashboard.css';

const Admindashboard = () => {
    return (
        <div className='admin'>
            <div className='subadmin'>
                <div>
                    <span>Hello,</span><span>User-name</span>
                    <p>Admin Dashboard details here</p>
                </div>
                <div className='costomer-id'>
                    <span>Customer id :</span>{" "}<span>001</span>
                    <br />
                    <span>Active :</span>{" "} <span>111</span>
                </div>
            </div>
            <div className='secondadmin'>
                <div>
                    <label>Admin id</label><br />
                    <input type="text" placeholder=''></input>
                </div>
            </div>
            <br />
        
            <div className='tables'>
                <table>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Package</th>
                        <th>Total image</th>
                        <th>Expiry Date</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jackson</td>
                        <td>94</td>
                        <td>94</td>
                        <td>94</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Johnson</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Admindashboard;