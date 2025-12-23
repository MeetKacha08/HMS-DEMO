import '../Patients/Patient.css';
import { useEffect, useState } from 'react';

const Patient = () => {
    const [formData, setFormData] = useState({
        userid: "",
        name: "",
        surname: "",
        age: "",
        contact: "",
        email: "",
        city: "",
        state: "",
        country: "",
        address: ""
    });

    const [users, setUser] = useState([]);

    // 🔹 Fetch all students
    const fetchUser = async () => {
        const response = await fetch("http://localhost:8000/User");
        const data = await response.json();
        setUser(data);
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

        await fetch("http://localhost:8000/User", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        alert("Patient added successfully");

        setFormData({ name: "", surname: "", age: "", contact: "", email: "", city: "", state: "", country: "", address: "" });

        fetchUser(); // refresh list
    };

    // 🔹 Delete student
    const deleteUsers = async (id) => {
        await fetch(`http://localhost:8000/User/${id}`, {
            method: "DELETE"
        });

        alert("Patient deleted");

        fetchUser(); // refresh list
    };

    // 🔹 Load data on page load
    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <div className='patient-container'>
            <div className="main-container">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Patient Registration Form</h5>

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
                                <select id="inputState" class="form-select" name="city" value={formData.city} onChange={handleChange}>
                                    <option selected>Rajkot</option>
                                    <option>Ahmedabad</option>
                                    <option>Surat</option>
                                    <option>Gandhinagar</option>
                                </select>
                            </div>

                            <div class="col-md-4">
                                <select id="inputState" class="form-select" placeholder="State" name="state" value={formData.state} onChange={handleChange}>
                                    <option selected>Gujarat</option>
                                    <option>Maharastra</option>
                                    <option>Uter Pradesh</option>
                                    <option>Himachal Pradesh</option>
                                    <option>Panjab</option>
                                </select>
                            </div>

                            <div class="col-md-4">
                                <select id="inputState" class="form-select" name="country" value={formData.country} onChange={handleChange}>
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
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Address</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan="9" align="center">No Data Found</td>
                        </tr>
                    ) : (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.contact}</td>
                                <td>{user.email}</td>
                                <td>{user.city}</td>
                                <td>{user.state}</td>
                                <td>{user.country}</td>
                                <td>{user.address}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => deleteUsers(user.id)}>
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
export default Patient;