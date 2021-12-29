import React from 'react'

export default function InputForm() {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='border border-dark mt-5 w-50'>
                <form>
                    <div className='text-center'>
                        <h2>Register</h2>
                    </div>
                    <div className='form-group p-2'>
                    <input type='text' className='form-control bg-dark text-light' placeholder='Name' name='name'  />
                    </div>
                    <div className='form-group p-2'>
                    <input type='text' className='form-control bg-dark text-light' placeholder='Surname' name='name'  />
                    </div>
                    <div className='form-group p-2'>
                    <input type='text' className='form-control bg-dark text-light' placeholder='e-mail' name='name'  />
                    </div>
                    <div className='form-group p-2 d-flex flex-row align-items-center'>
                        <div className='w-50'>
                        <label for="inputType" class="form-label fw-bold">Choose type of Course</label>
                        </div>
                        <div className='form-group w-100'>
                        <select id="inputType" className="form-select bg-dark text-light">
                             <option selected>Full-Stack</option>
                             <option>Front-End</option>
                             <option>Back-End</option>
                         </select>
                        </div>    
                    </div>
                    <div className='form-group p-2 d-flex flex-row align-items-center'>
                        <div className='w-50'>
                        <label for="inputType" className="form-label fw-bold">Choose the Lecturer</label>
                        </div>
                        <div className='form-group w-100'>
                        <select id="inputType" className="form-select bg-dark text-light">
                             <option selected>Ylber Veliu</option>
                             <option>Bryan Cranston</option>
                             <option>Alvaro Morte</option>
                         </select>
                        </div>    
                    </div>
                    <div className='text-center mt-3 mb-3'>
                        <button className='btn btn-warning fw-bold'>Sign Up</button>
                    </div>
                </form>
            </div>
             
        </div>
    )
}
