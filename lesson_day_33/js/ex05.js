
const fetchPosts = async () => {
    try {
        const response = await fetch ('https://jsonplaceholder.typicode.com/posts?_page=1');

        if(!response.ok) {
            throw new Error(`Error : ${response.status}`)
        }

        const posts = await response.json();

        console.log(posts)

        const bodyElement = document.getElementById('posts');
        let index = 1;
        posts.map((post,index) => {
            const li = document.createElement('p');
            li.textContent = post.title;
            li.setAttribute('onClick', `fetchComments(${index + 1})`)
            bodyElement.appendChild(li);
        })
    } catch (error) {
        console.error(error);
    }
}
const fetchComments = async (postId) => {
    try {
        const response = await fetch (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        if(!response.ok) {
            throw new Error (`Error : ${response.status}`)
        }
        const comments = await response.json();

        document.getElementById('comments').innerHTML = comments.map(comment => `<p>${comment.body}</p>`).join('');


    } catch (error) {
        console.error(error);
    }
}
fetchPosts();