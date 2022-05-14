import Cards from '../cards.jsx'


function Home() {
    const awards = [1,1,1,1,,1,1,1]
      return (
        <div className="home">
          <div className='card-holder'>
                {
                awards.map(award => {
                    return <Cards />
                }
                )
            }
      </div>
        </div>
      )
}

export default Home;