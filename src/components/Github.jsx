import "./Github.css";
import { useFetch } from "../hooks/useFetch";

export default function Github({ login }) {
    const { data, loading, error } = useFetch(`https://api.github.com/users/${login}`);

    if(loading) return (<div>Loading ...</div>);
    if(error) return (<pre>Error: { JSON.stringify(error, null, 2) } </pre>);
    return (
        <div className="flex-container">
            <div>
                <img src={data.avatar_url} className="circle-image" alt={data.login} />
            </div>            
            <h1>{ data.login }</h1>
            { data.name && <h3>{ data.name }</h3> }
            { data.location && <p>{ data.location }</p> }
        </div>
    );
}