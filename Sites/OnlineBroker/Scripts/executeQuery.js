async function executeQuery( queryString ) {

    const apiEndpoint = "https://sawusdomain.com/Sites/OnlineBroker/key.php";

    const query = JSON.stringify({ query: queryString });

    const response = await fetch(
        apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: query
    });

    data = await response.json();

    return data;
}
