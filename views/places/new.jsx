const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            id="name" 
                            name="name" 
                            required                          
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                        <input 
                            className="form-control" 
                            type="url" 
                            id="pic" 
                            name="pic"
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisine">Cuisines</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            id="cuisines" 
                            name="cuisines" 
                            required
                        ></input>
                    </div>
                    <div className="form-group">    
                        <label htmlFor="city">City</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            id="city" 
                            name="city"                           
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                            className="form-control" 
                            type="text" id="state" 
                            name="state"
                        ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Founded Year</label>
                        <input 
                            type="number"
                            className="form-control" 
                            id="founded" 
                            name="founded"
                            value={new Date().getFullYear()}
                        ></input>
                    </div>
                    <br></br>
                    <input 
                        type="submit" 
                        value="Add Place" 
                        className='btn btn-primary'
                    ></input>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form