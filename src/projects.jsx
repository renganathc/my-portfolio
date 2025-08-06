import Card from './card';
import './projects.css'
import { useState, useEffect } from 'react';

function Projects() {

    const [repos, setRepos] = useState([]);
    const api = "https://api.github.com/users/renganathc/repos";

    useEffect(() => {
        fetch(api)
          .then((res) => res.json())
          .then((data) => {
            const filtered = data
              .filter(repo => !repo.fork)

            for (const repo of filtered) {
                repo.name = repo.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
            }

            setRepos(filtered);
          });
      }, []);
    

    return (
        <div className="projects-con">
            <h2 className="heading-about" id="projects-head">Projects</h2>

            <div className="project-cards">

                {repos.map((repo) => (
                    <Card key={repo.id} title={repo.name}
                    desc={repo.description}
                    languages={[
                        { name: "JavaScript", color: "#f1e05a" },
                        { name: "Python", color: "#3572A5" },
                        { name: "HTML", color: "#e34c26" },
                    ]} onClick={() => {window.open(repo.homepage == "" ? repo.html_url : repo.homepage, '_blank');}}/>
                ))}

            </div>

        </div>
    )

}

export default Projects