import React from 'react';

const CatViewer: React.FC = async () => {
    
    const picUrl = await getPic();
    const catFact = await getCatFact();
    
    return (
        <div className="grid grid-cols-3 gap-8 pt-4">
            <div>
                {picUrl && <img src={picUrl} alt="Cat Pic" />}
            </div>
            <div>
                <div><label htmlFor='fact' className="font-bold">Fun Cat Fact:</label></div>
                <div>{catFact && <span id="fact">{catFact}</span>}</div>
            </div>
        </div>
    )
}

const getPic = async () => {
    const fetchPic = async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            if (!response.ok) {
                throw new Error('Failed to fetch cat pic');
            }
            const data = await response.json();
            return data[0].url;
        } catch (error) {
            console.error('Error fetching cat pic:', error);
            throw error;
        }
    }

    try {
        const picUrl = await fetchPic();
        return picUrl;
    } catch (error) {
        console.error('Failed to load data:', error);
        return "";
    }
}

const getCatFact = async () => {
    const fetchCatFact = async () => {
        try {
            const response = await fetch('https://meowfacts.herokuapp.com/');
            if (!response.ok) {
                throw new Error('Failed to fetch cat fact');
            }
            const data = await response.json();
            return data.data[0];
        } catch (error) {
            console.error('Error fetching cat fact:', error);
            throw error;
        }
    }

    try {
        const fact = await fetchCatFact();
        return fact;
    } catch (error) {
        console.error('Failed to load data:', error);
        return "";
    }
}

export default CatViewer;