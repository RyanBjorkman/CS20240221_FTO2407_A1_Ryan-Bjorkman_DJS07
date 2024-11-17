// This component defines the header section of the meme generator.
// It includes the logo image, the title, and the project subtitle.

export default function Header() {
    return (
        <header className="header">
            {/* Logo image for the header */}
            <img 
                src="./images/troll-face.png" 
                className="header--image"
                alt="Troll Face Logo"
            />

            {/* Title of the application */}
            <h2 className="header--title">Meme Generator</h2>

            {/* Subtitle describing the project */}
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    );
}