import '../Doctors/doctor.css';
import { useEffect, useState } from 'react';

const Doctor = () => {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        age: "",
        specialization: "",
        experiance: "",
        contact: "",
        email: "",
        city: "",
        state: "",
        country: "",
        address: ""
    });

    const [doctors, setDoctor] = useState([]);

    // 🔹 Fetch all students
    const fetchDoctor = async () => {
        const response = await fetch("http://localhost:8000/Doctor");
        const data = await response.json();
        setDoctor(data);
    };

    // 🔹 Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 🔹 Add student
    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch("http://localhost:8000/Doctor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        alert("Patient added successfully");

        setFormData({
            name: "",
            age: "",
            specialization: "",
            experiance: "",
            contact: "",
            email: "",
            city: "",
            state: "",
            country: "",
            address: ""
        });

        fetchDoctor(); // refresh list
    };

    // 🔹 Delete student
    const deleteDoctor = async (id) => {
        await fetch(`http://localhost:8000/Doctor/${id}`, {
            method: "DELETE"
        });

        alert("Doctor deleted");

        fetchDoctor(); // refresh list
    };

    // 🔹 Load data on page load
    useEffect(() => {
        fetchDoctor();
    }, []);
    return (
        <div className='patient-container'>
            <div className="main-container">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Doctor Registration Form</h5>

                        {/* <!-- No Labels Form --> */}
                        <form class="row g-3" onSubmit={handleSubmit}>
                            <div class="col-md-4">
                                <input type="text" class="form-control" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
                            </div>

                            <div class="col-md-4">
                                <input type="number" class="form-control" placeholder="Age" name="age" value={formData.age} onChange={handleChange} />
                            </div>

                            <div class="col-md-4">
                                <input type="text" class="form-control" placeholder="Contact" name="contact" value={formData.contact} onChange={handleChange} />
                            </div>

                            <div class="col-md-4">
                                <input type="email" class="form-control" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                            </div>

                            <div class="col-md-4">
                                <select id="inputState" class="form-select" name="specialization" value={formData.specialization} onChange={handleChange}>
                                    <option selected>Specilization</option>
                                    <option>Cardiologists</option>
                                    <option>Dermatologists</option>
                                    <option>Oncologists</option>
                                    <option>Neurologists</option>
                                    <option>Gastroenterologists</option>
                                    <option>Orthopedists</option>
                                    <option>Psychiatrists</option>
                                    <option>OB/GYNs</option>
                                    <option>Gastroenterologists</option>

                                </select>
                            </div>

                            <div class="col-md-4">
                                <select id="inputState" class="form-select" name="experiance" value={formData.experiance} onChange={handleChange}>
                                    <option selected>Experiance</option>
                                    <option>Fresher</option>
                                    <option>1 Year</option>
                                    <option>2 Years</option>
                                    <option>3 Years</option>
                                </select>
                            </div>

                            <div class="col-md-4">
                                <select id="inputState" class="form-select" name="city" value={formData.city} onChange={handleChange}>
                                    <option selected>City</option>
                                    <option>Rajkot</option>
                                    <option>Ahmedabad</option>
                                    <option>Surat</option>
                                    <option>Gandhinagar</option>
                                </select>
                            </div>

                            <div class="col-md-4">
                                <select id="inputState" class="form-select" placeholder="State" name="state" value={formData.state} onChange={handleChange}>
                                    <option selected>State</option>
                                    <option>Gujarat</option>
                                    <option>Maharastra</option>
                                    <option>Uter Pradesh</option>
                                    <option>Himachal Pradesh</option>
                                    <option>Panjab</option>
                                </select>
                            </div>

                            <div class="col-md-4">
                                <select id="inputState" class="form-select" name="country" value={formData.country} onChange={handleChange}>
                                    <option selected>Country</option>
                                    <option>India</option>
                                </select>
                            </div>

                            <div class="col-md">
                                <input type="text" class="form-control" placeholder="Address" name="address" value={formData.address} onChange={handleChange} />
                            </div>

                            <div class="text-center">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <button type="reset" class="btn btn-secondary">Reset</button>
                            </div>
                        </form>
                        {/* <!-- End No Labels Form --> */}
                    </div>
                </div>
            </div>

            <table class="table table-striped" border={1} bordercolor="black">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Specialization</th>
                        <th>Experiance</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Address</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {doctors.length === 0 ? (
                        <tr>
                            <td colSpan="9" align="center">No Data Found</td>
                        </tr>
                    ) : (
                        doctors.map((doctors) => (
                            <tr key={doctors.id}>
                                <td>{doctors.name}</td>
                                <td>{doctors.age}</td>
                                <td>{doctors.contact}</td>
                                <td>{doctors.email}</td>
                                <td>{doctors.specialization}</td>
                                <td>{doctors.experiance}</td>
                                <td>{doctors.city}</td>
                                <td>{doctors.state}</td>
                                <td>{doctors.country}</td>
                                <td>{doctors.address}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => deleteDoctor(doctors.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>

            </table>
        </div>

    );
};
export default Doctor;