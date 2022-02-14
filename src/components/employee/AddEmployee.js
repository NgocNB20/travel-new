import { useEffect, useState } from "react";
import { useNavigate,useParams} from "react-router";
import employeeServices from "../services/employee.services";

const AddEmployee = () => {
      const [firstname, setFirstName]=useState('');
      const [lastname, setLastName]=useState('');
      const [emailId, setEmail]=useState('');
      const [content, setContent]=useState('');
      const location=useNavigate();
      const {id}= useParams();
      
      const saveEmployee=(e) => {
           e.preventDefault();
          const employee={firstname,lastname,emailId,id};
          if(id){
            employeeServices.update(employee)
            .then(response =>{
                console.log(response.data);
                location('/');
            })
            .catch(error =>{
                console.log(error);
            })
          }else{
            employeeServices.createEmployee(employee)
            .then(response =>{
                console.log(response.data);
                 location('/');
            })
            .catch(err =>{
                console.log(err);
            });
          }

      }
 
 
      useEffect(()=>{
          if(id){
              employeeServices.get(id)
              .then(response =>{
                  setFirstName(response.data.firstname);
                  setLastName(response.data.lastname);
                  setEmail(response.data.emailId);
                  setContent("update");
              })
          }else{
            setContent("add");
          }
      },[])
    return (
        <div className="container">
        <div className="col-6 text-center mx-auto">
        <h3>{content}</h3>
            <hr/>
            <form>
            <div  className="form-group">
                    <input
                        id="firstName"
                        className="form-control" 
                        type="text"
                        value={firstname}
                        onChange={(e) =>setFirstName(e.target.value)}
                        placeholder="Enter first name"
                    />
            </div>
            <div  className="form-group">
                    <input
                        id="lastName"
                        className="form-control" 
                        type="text"                        
                        value={lastname}
                        onChange={(e) =>setLastName(e.target.value)}
                        placeholder="Enter last name"
                    />
            </div>
            <div  className="form-group">
                    <input 
                        id="email"
                        type="text"
                        className="form-control"
                        value={emailId}
                        onChange={(e) =>{setEmail(e.target.value);console.log(emailId);}}
                        placeholder="Enter email"
                    />
                    <div> <button className="btn btn-primary" onClick={(e) =>saveEmployee(e)}>save</button></div>       
            </div> 
            </form>
        </div>          
        </div>
    );
}
export default AddEmployee;