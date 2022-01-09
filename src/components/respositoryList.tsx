import { RepositoryItem } from "./repositoryitem";
import { useState, useEffect } from "react";
import "../styles/repositories.scss";



export function RespositoryList() {

interface Repository{
  name: string;
  description: string;
  html_url: string;
}
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Repository list</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
