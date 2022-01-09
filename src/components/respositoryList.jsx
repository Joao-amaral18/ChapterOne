import { RepositoryItem } from "./repositoryitem";
const respositoryName = "Unform2 ";

export function RespositoryList() {
    return(
        <section className="respository-list">
            <h1>Repository list</h1>
            <ul>
               <RepositoryItem repository="unform"/>
               <RepositoryItem />
               <RepositoryItem />
               <RepositoryItem />
            </ul>
        </section>
    )
}