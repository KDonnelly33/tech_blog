const commentHandler = async (event) => {
    event.preventDefault();
    const blog_id = document.querySelector('input[name="blog-id"]').value.trim();
    const comment = document.querySelector('textarea[name="comment-body"]').value.trim();
    console.log(blog_id, comment)
    if (comment) {
        await fetch ('/api/comment', {
            method: 'POST',
            body: JSON.stringify({blog_id, comment}),
            headers: {'Content-Type': 'application/json'}
        })
        document.location.reload();


    }
}

document.querySelector('#newcommentForm').addEventListener('submit', commentHandler);