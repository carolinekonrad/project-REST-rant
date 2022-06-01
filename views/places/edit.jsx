const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                    <div className="form-group">
                        <label htmlFor="name">Place Name</label>
                            <input 
                            className="form-control" 
                            type="text" 
                            id="name" name="name" 
                            required
                            value={data.place.name}
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" type="url" id="pic" name="pic" defaultValue={data.place.pic}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisine">Cuisines</label>
                            <input defaultValue={data.place.cuisines} className="form-control" type="text" id="cuisines" name="cuisines" required></input>
                    </div>
                    <div className="form-group">    
                        <label htmlFor="city">City</label>
                            <input defaultValue={data.place.city} className="form-control" type="text" id="city" name="city"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                            <input defaultValue={data.place.state} className="form-control" type="text" id="state" name="state"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="founded">Founded</label>
                        <input className="form-control" id="founded" name="founded" value={data.place.founded}></input>
                    </div>
                    <br></br>
                    <input type="submit" value="Edit Place" className='btn btn-primary'></input>
                </form>
          </main>
        </Def>
    )
}

module.exports = edit_form
