async function getUserAndPosts(userId) {
    try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const user = await userResponse.json();
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        const posts = await postsResponse.json();
        console.log(user);
        console.log(posts)
    } catch (err) {
        console.error(err);
    }
}
getUserAndPosts(2);
getUserAndPosts(5);