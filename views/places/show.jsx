const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>No comments yet!</h3>
    )

    let rating = (
        <h3 className="inactive">Not yet rated</h3>
    )
    if (data.place.comments.length){
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐️'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
    }
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border'>
                    <h2>{c.rant ? 'Rant!😠' : 'Rave!😍'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
          <main>
            <div className="row">
              <div className="col-sm-6">
                <img src={data.place.pic} alt={data.place.name} />
                <h3>
                    Located in {data.place.city}, {data.place.state}
                </h3>
              </div>
              <div className="col-sm-6">
                <h1>
                    { data.place.name }
                </h1>
                <h2>
                    {rating}
                </h2>
                
            <br />
                <h2>
                    Description
                </h2>
                <h3>
                    {data.place.showEstablished()}
                </h3>
                <h4>
                    Serving {data.place.cuisines}
                </h4>
            <br />
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
              </div>
            </div>
            <hr />
            <h2>Comments</h2>
                {comments}
            <h2>Got your own Rant or Rave?</h2>
            <form action={`/places/${data.place.id}/comment`} method="POST">
                <div className="row">
                    <div className="form-group col-sm-12">
                    <label>Comments</label>
                    <input type="text" name="content" id="content" className="form-control"></input>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-sm-4">
                        <label>Your Name</label>
                        <input type="text" name="author" id="author" className="form-control"></input>
                    </div>
                    <div className="form-group col-sm-4">
                        <label>Star Rating</label>
                        <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className='form-control'></input>
                    </div>
                    <div className='form-group col-sm-4'>
                        <label>Rant?</label>
                        <input type="checkbox" id="rant" name="rant" className='form-control form-check-input'></input>
                    </div>
                    <br />
                </div>
                <input type="submit" className="btn btn=primary" value="Add Comment"></input>
            </form>         
          </main>
        </Def>
    )
}


module.exports = show