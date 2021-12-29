export const fetchMainContentData = async (nav, genre) => {
    const query = `nav=${nav}&genre=${genre}`;
    try {
        const res = await fetch(
            `http://localhost:8080/mainPageData?${query}`, 
            { method: "GET" }
        )
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
}