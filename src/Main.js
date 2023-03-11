import {Link} from 'react-router-dom'

function Main () {

    return (
    <div className="App">
      <header className="App-header">
      <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li><Link to='/book'>Book Reservation Here</Link></li>
                <li><a href="about.html">About</a></li>
            </ul>
        </nav>
        <div>
          <h1>Little Lemon</h1>
        </div>
        <main>
            <article>
                <div class='promotion'>
                    <h1>30% off this weekend!</h1>
                    <p>Offices parties lasting outward nothing age few resolve. Impression to discretion understood to we interested he excellence. Him remarkably use projection collecting. Going about eat forty world has round miles. Attention affection at my preferred offending shameless me if agreeable. Life lain held calm and true neat she. Much feet each so went no from. Truth began maids linen an mr to after.</p>
                </div>
                
            </article>
            <div class="container">
                <section>
                    <h1>Our Menu</h1>
                    <img src={require('./pics/Asset 9@4x.png')}/>
                    <p>Offices parties lasting outward nothing age few resolve. Impression to discretion understood to we interested he excellence. Him remarkably use projection collecting. Going about eat forty world has round miles. Attention affection at my preferred offending shameless me if agreeable. Life lain held calm and true neat she. Much feet each so went no from. Truth began maids linen an mr to after.</p>
                    
                </section>
                <section>
                    <h1>Book a table now</h1>
                    <img src={require('./pics/Asset 9@4x.png')}/>
                    <Link to='/book'>Book Reservation Here</Link>
                    
                </section>
                <section>
                    <h1>About us</h1> 
                    <img src={require('./pics/Asset 9@4x.png')}/>
                    <p>Offices parties lasting outward nothing age few resolve. Impression to discretion understood to we interested he excellence. Him remarkably use projection collecting. Going about eat forty world has round miles. Attention affection at my preferred offending shameless me if agreeable. Life lain held calm and true neat she. Much feet each so went no from. Truth began maids linen an mr to after.</p>
                   
                </section>
            </div>

        </main>
        

        <footer>
            <div>
                <img class='footer-logo' src={require('./pics/Asset 7@4x.png')}/>
            </div>
            <div>
                <p>Copyright Little Lemon</p>
            </div>
        </footer>
      </header>
    </div>
    )
}

export default Main;