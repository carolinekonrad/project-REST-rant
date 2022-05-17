const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src="/images/chia-fruit-drink.jpg" alt="chia fruit shake"></img>
                <div>
                  Photo by <a href="author_link">Brenda Godinez</a> on <a href="unsplash_link">Unsplash</a>
                </div>
              </div>
              <a href="/places"><button className="btn-primary">Places Page</button></a>
          </main>
      </Def>
    )
  }

module.exports = home

  