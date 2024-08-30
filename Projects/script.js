document.addEventListener('DOMContentLoaded', function () {
    const fetchDataBtn = document.getElementById('fetchDataBtn');
    const dataContainer = document.getElementById('dataContainer');

    fetchDataBtn.addEventListener('click', function () {
        // Create a new XMLHttpRequest object
        const xhr = new XMLHttpRequest();

        // Configure it: GET-request for the URL /data.json (you can replace this with a real API endpoint)
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

        // Set up the callback function for when the request is complete
        xhr.onload = function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                displayData(data);
            } else {
                dataContainer.innerHTML = `<p>Failed to fetch data. Status: ${xhr.status}</p>`;
            }
        };

        // Send the request
        xhr.send();
    });

    function displayData(data) {
        dataContainer.innerHTML = ''; // Clear existing content

        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'data-item';
            div.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
            dataContainer.appendChild(div);
        });
    }
});
