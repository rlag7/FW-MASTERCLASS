import { useState } from 'react';
import './App.css'; // Dit bestand kun je gebruiken voor eigen stijlen als nodig
import 'bootstrap/dist/css/bootstrap.min.css'; // Vergeet niet Bootstrap CSS te importeren!

function App() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <img
                            src="https://via.placeholder.com/150"
                            className="card-img-top"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card 1</h5>
                            <p className="card-text">This is a simple Bootstrap card.</p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <img
                            src="https://via.placeholder.com/150"
                            className="card-img-top"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card 2</h5>
                            <p className="card-text">This is another simple Bootstrap card.</p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
