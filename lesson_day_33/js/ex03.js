

let data = [];
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
            throw new Error (`Error : ${response.status}`)
        }
        data = await response.json();
        const bodyElement = document.getElementById('searchResults');
        data.map(post => {
            const para = document.createElement('p')
            para.textContent = post.title;
            bodyElement.appendChild(para)
        })   
    } catch (error) {
        console.error(error);
    }
}

const  filterPosts = async (keyword) => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) {
            throw new Error (`Error : ${response.status}`)
        }
        data = await response.json();
        const filteredPosts = data.filter(d => d.title.includes(keyword));
        document.getElementById('searchResults').innerHTML = filteredPosts.map(post => `<p>${post.title}</p>`).join('');
    } catch(e) {
        console.error(e)
    }
}
fetchData();
document.getElementById('searchBox').addEventListener('input' , (e) => filterPosts(e.target.value));

