import React, { useState } from 'react'
import axios from "axios";

function CreateUser() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData(values => ({...values, [name]:value}));
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    const valid = await validationForm();
    if(valid) {
      axios.post("http://localhost:80/ReactJs/phase-3/my-app-backend/index.php", formData);
    }
    // console.log(formData)
  }

  const validationForm = () => {
    const {name, mobile, email} = formData;

    // name regex for testing name
    let nameReg = /^[A-Za-z\s]+$/;

    if(!(nameReg.test(name))) {
      setError('Name not valid!!!');
      return false;
    }
    return true;
  }

  return (
    <>
    <div className={'container'}>
      <div className={'form-div'}>
        <form onSubmit={handleSubmit}>
          <div className={'table-div'}>
            <table cellSpacing={'10'}>
              <tbody>
                <tr>
                  <th>
                    <label>Name : </label>
                  </th>
                  <td>
                    <input type={'text'} name={'name'}
                           onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <label>Mobile : </label>
                  </th>
                  <td>
                    <input type={'number'} name={'mobile'}
                           onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <th>
                    <label>Email : </label>
                  </th>
                  <td>
                    <input type={'email'} name={'email'}
                           onChange={handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={'2'} align={'right'}>
                    <button type={'submit'}>Submit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default CreateUser