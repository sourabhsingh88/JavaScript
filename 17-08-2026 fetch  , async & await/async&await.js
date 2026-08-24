let fetchData = async () => {
    try {
        let response = await fetch("url");
        let finalData = await response.json();
        return finalData;
    }catch(err) {
    console.error('Error:', err);
    }
}

fetchData();