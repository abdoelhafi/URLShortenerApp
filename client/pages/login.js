import React from 'react'

const Login = () => <>
        <div className="container">
        <div className="row justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                    <div className="section">
                    <p className="lead">Login easily using your google acount</p></div>
                    <a href="/auth/google" className="btn btn-danger">
                        <i className="fab fa-google left"></i> Log In With Google</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
  </>

export default Login;
