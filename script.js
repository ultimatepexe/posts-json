let posts;

(async function() {
    try {
        const response = await fetch("posts.json")
        posts = await response.json()
    } catch (error) {
        console.log(error)
    } finally {
        for (const p of posts) {
            const main = document.querySelector("main")
            const post = document.createElement("div")
            const id = document.createElement("p")
            const date = document.createElement("p")
            const content = document.createElement("article")
            id.textContent = p.id
            date.textContent = p.date
            content.textContent = p.content
            post.appendChild(id)
            post.appendChild(date)
            post.appendChild(content)
            main.appendChild(post)
        }
    }
})()