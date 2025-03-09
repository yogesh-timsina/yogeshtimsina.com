const { useState } = React;

function App() {
    const [currentSection, setCurrentSection] = useState('home');
    const [likes, setLikes] = useState({ home: 0, about: 0, contact: 0 });

    const sections = {
        home: (
            <section>
                <h1>Welcome to My Personal Website</h1>
                <p>Hello! My name is Yogesh Timsina. I am from Panchthar, currently living in Bhaktapur. I am studying Bachelor of Information Management (BIM) at Bhaktapur Multiple Campus under TU University. Expected course completion time is 2083 BS and I joined in 2079 BS.</p>
                <p>I have knowledge of C++, Java, HTML, CSS, JavaScript, PHP, and Machine Learning, but my main IT subject is Python.</p>
                
            </section>
        ),
        about: (
            <section>
                <h2>About Me</h2>
                <p>I am passionate about technology and programming. I enjoy learning new languages and frameworks, and I am particularly interested in Python and Machine Learning. My goal is to become a proficient software developer and contribute to innovative projects.</p>
    
            </section>
        ),
        contact: (
            <section>
                <h2>Contact</h2>
                <p>You can reach me at: yogeshtimsina64@gmail.com</p>
                <p>+977 9746878106</p>
                
            </section>
        ),
    };

    function handleLike(section) {
        setLikes(prevLikes => ({ ...prevLikes, [section]: prevLikes[section] + 1 }));
    }

    return (
        <div>
            <header>
                <img src="IMG_20250212_194320_296.webp" alt="Yogesh Timsina" />
                <nav>
                    <a href="#" onClick={() => setCurrentSection('home')}>Home</a>
                    <a href="#" onClick={() => setCurrentSection('about')}>About</a>
                    <a href="#" onClick={() => setCurrentSection('contact')}>Contact</a>
                </nav>
            </header>
            <main>
                {sections[currentSection]}
            </main>
            <footer>
                <p>&copy; 2025 Yogesh Timsina</p>
            </footer>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));