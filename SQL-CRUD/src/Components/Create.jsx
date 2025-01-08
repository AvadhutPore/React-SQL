import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const Create = () => {


    const [values, setValues] = useState({
        name: "",
        email: ""
    });
    
    const navigate = useNavigate();


    // Handle Form Submit

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);

        try {
            const res = await fetch("http://localhost:3050/student", {
                method: "post",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(values)
            })
    
            const data = await res.json();
            console.log(data);
            navigate('/');
        } catch (error) {
            console.log(error);
            
        }
        
    }

  return (
    <>
      <section
        id="Student-Table"
        className="wrapper d-flex vh-100 justify-content-center align-items-center"
      >
        <div className="w-50 rounded p-3 border border-light">
            <form onSubmit={handleSubmit}>
                <h2 className="pb-2">Add Student</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="pb-2">Name</label>
                    <input value={values.name} onChange={e => setValues({...values, name:e.target.value})} id="name" type="text" placeholder="Enter Name" className="form-control" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="pb-2">Email</label>
                    <input value={values.email} onChange={e => setValues({...values, email: e.target.value})} id="email" type="text" placeholder="Enter Email" className="form-control" />
                </div>
                <button className="btn btn-success">
                    Submit
                </button>
            </form>
        </div>
      </section>
    </>
  );
};
