let page = 1;

async function fetchPosts(page) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
        if (!response.ok) {
            throw new Error(`Error : ${response.status}`)
        }
        const posts = await response.json();
            document.getElementById('posts').innerHTML = posts.map(post => `<p>${post.title}</p>`).join('')
    } catch (error) {
        console.error('error')
    }
}

document.getElementById('prev').addEventListener("click", () => {
    if (page < 1) {
        page = 1;
        console.log(page)
    } else {
        page = page - 1;
        fetchPosts(page);
    }
})
document.getElementById('next').addEventListener("click", () => {
    if (page > 10) {
        page = 1;
    } else {
        page = page + 1;
        fetchPosts(page);
    }
})

fetchPosts(1);