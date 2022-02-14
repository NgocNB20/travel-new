 import { useEffect, useState } from 'react';
import employeeServices from '../services/employee.services';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


function ListEmpoyee() {
  const [employees,setEmployees]=useState([]);
  useEffect(()=>{
    init();
  },[])
  const init=()=>{
    employeeServices.getAll()
    .then(response=>{
      setEmployees(response.data);
    })
    .catch(error=>{
      console.log(error);
    })
  }
  const handleCick=(id)=>{
    employeeServices.remove(id)
    .then(response=>{
      init();
    })
    .catch(error=>{
      console.log(error);
    })  
  }
  return (
    
      <div className="container">
      <h1>List Employee</h1>
      <Link to="/add" className="btn btn-primary mb-2">Add Employee</Link>
      <table className="table table-success table-striped">
      <thead className="theaad-dark">
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {
          employees.map(employee=>(
          <tr key={employee.id}>
             <td>{employee.id}</td>
             <td>{employee.firstname}</td>
             <td>{employee.lastname}</td>
             <td>{employee.emailId}</td>
             <td>
               <Link className="btn btn-info" to={`/employees/edit/${employee.id}`}>Update</Link>
               <button className="btn btn-danger" onClick={(e)=>handleCick(employee.id)}>Delete</button>
             </td>
          </tr>
          ))
        }
      </tbody>  
      </table>   
      </div>
 
  );
}
export default ListEmpoyee;
