import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Link,Outlet} from 'react-router-dom'
import data from './Data'
const Dashboard = ({regdash}) => {
  return (
    <div>
      <Header/>
      
      <nav>
        <ul>
            <li>
                Welcome {regdash.email}
            </li>
            <li>
            <Link to="/logout">Change Password</Link>
            </li>
            <li>
                <Link to="/logout">logout</Link>
            </li>
        </ul>
      </nav>
      <table border="1">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
        </tr>
        {data.map((d)=>(<tr>
          <td>{d.id}</td>
          <td>{d.name}</td>
          <td>{d.email}</td>
          <td>{d.mobile}</td>
          </tr>))
        }
      </table>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Dashboard
