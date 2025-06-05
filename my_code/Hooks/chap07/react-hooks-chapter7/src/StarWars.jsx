import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Ensure axios is installed

function Characters({ searchTerm }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://swapi.dev/api/people/?search=${searchTerm}`)
            .then((res) => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [searchTerm]); // re-run when searchTerm changes

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {data.length > 0 ? (
                data.map((item) => (
                    <div key={item.name}>{item.name}</div>
                ))
            ) : (
                <div>No results found.</div>
            )}
        </div>
    );
}

function StarWars() {
    const [searchTerm, setSearchTerm] = useState("luke");

    return (
        <div>
            <h2>Star Wars Characters</h2>
            <Characters searchTerm={searchTerm} />
        </div>
    );
}

export default StarWars;