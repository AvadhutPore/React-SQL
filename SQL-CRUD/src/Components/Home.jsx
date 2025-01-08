import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Home = () => {
  const [studentData, setStudentData] = useState([]);

  // Get Students Data From Api
  const getStudents = async () => {
    try {
      const res = await fetch("http://localhost:3050/");
      const data = await res.json();
      setStudentData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <>
      <section id="Student-Table" className="wrapper d-flex vh-100 justify-content-center align-items-center">
        <div className="w-50 rounded p-3 border border-light">
            <h2>Student List</h2>
            <div className="d-flex justify-content-end pb-3 pt-3">
                <Link to="/create" className="btn btn-success">Create +</Link>
            </div>
          <table className="table">
            <thead>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </thead>
            <tbody>
              {studentData.map((curStudent) => {
                return (
                  <tr key={curStudent.ID} className="mb-3">
                    <td>{curStudent.ID}</td>
                    <td>{curStudent.Name}</td>
                    <td>{curStudent.Email}</td>
                    <td>
                      <button className="btn btn-sm btn-outline-secondary me-3">Read</button>
                      <button className="btn btn-sm btn-outline-secondary me-3">Edit</button>
                      <button className="btn btn-sm btn-outline-secondary">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
