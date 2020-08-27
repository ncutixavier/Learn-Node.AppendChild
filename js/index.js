const container = document.querySelector('.container')

const renderPost = (doc) => {
    const post = document.createElement('div')
    post.setAttribute('class', 'post')

    const title = document.createElement('h1')
    title.setAttribute('class', 'post-title')
    title.textContent = doc.author

    const content = document.createElement('p')
    content.setAttribute('class', 'post-content')
    content.textContent = doc.content

    post.appendChild(title)
    post.appendChild(content)

    container.appendChild(post)
}

const posts = [
    {
        title: "Ronald Mugema",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea rem velit voluptatibus veniam. Id, est. Natus tempore eveniet possimus ut, sed est nostrum repudiandae quo suscipit earum magni consequuntur ipsum distinctio fuga culpa atque autem repellat recusandae! Soluta explicabo numquam tempore, amet tenetur placeat accusantium et quas dolorem laboriosam. Exercitationem sint soluta mollitia expedita vel porro vitae itaque beatae."
    },

    {
        title: "Happy Karigirwa",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea rem velit voluptatibus veniam. Id, est. Natus tempore eveniet possimus ut, sed est nostrum repudiandae quo suscipit earum magni consequuntur ipsum distinctio fuga culpa atque autem repellat recusandae! Soluta explicabo numquam tempore, amet tenetur placeat accusantium et quas dolorem laboriosam. Exercitationem sint soluta mollitia expedita vel porro vitae itaque beatae."
    },

    {
        title: "Gerard Niyigena",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ea rem velit voluptatibus veniam. Id, est. Natus tempore eveniet possimus ut, sed est nostrum repudiandae quo suscipit earum magni consequuntur ipsum distinctio fuga culpa atque autem repellat recusandae! Soluta explicabo numquam tempore, amet tenetur placeat accusantium et quas dolorem laboriosam. Exercitationem sint soluta mollitia expedita vel porro vitae itaque beatae."
    }
]

console.log(posts)

// posts.forEach(el => renderPost(el))

fetch('http://127.0.0.1:5020/api/v1/blogs', {
    method: 'GET'
}).then(res=>res.json())
.then(dt=>{
    console.log(dt)
    dt.data.articles.forEach(article => renderPost(article))
})
