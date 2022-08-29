import React from "react";
import "./Portfolio.css"; // import css file
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

function Portfolio() {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "A-Responsive-Educational-Website",
      github: "https://github.com/midevictor/A-Responsive-Educational-Website",
      demo: "https://midevictor.github.io/A-Responsive-Educational-Website/",
    },
    {
      id: 2,
      image: IMG2,
      title: "ChatMe",
      github: "https://github.com/midevictor/ChatMe",
      demo: "https://midevictor.github.io/ChatMe/",
    },
    {
      id: 3,
      image: IMG3,
      title: "GitHub-Finder",
      github: "https://github.com/midevictor/GitHub-Finder-",
      demo: "https://midevictor.github.io/GitHub-Finder-/",
    },

    {
      id: 4,
      image: IMG4,
      title: "A Responsive Finiacial Admin DashBoard",
      github: "https://github.com/midevictor/Responsive-Admin-Dashboard",
      demo: " https://midevictor.github.io/Responsive-Admin-Dashboard/",
    },

    {
      id: 5,
      image: IMG5,
      title: "Number-Guessing-Game",
      github: "https://github.com/midevictor/Number-Guessing-Game",
      demo: " https://midevictor.github.io/Number-Guessing-Game/",
    },
    {
      id: 6,
      image: IMG6,
      title: "Book-Store-App",
      github: "https://github.com/midevictor/Book-Store-App",
      demo: "https://midevictor.github.io/Book-Store-App/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="porfolio_item-cta">
                <a href={github} className="btn">
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
