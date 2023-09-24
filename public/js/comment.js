const commentHandler = async (event) => {
    event.preventDefault();
    const blogpost_id = document.querySelector('input[name="blog-id"]').value;
    const comment = document.querySelector('textarea[name ="comment-body"]').value.trim();
    console.log(comment, blogpost_id )
    if (comment) {
        await fetch ('/api/comment', {
            method: 'POST',
            body: JSON.stringify({blogpost_id, comment}),
            headers: {'Content-Type': 'application/json'}
        })
        document.location.reload();


    }
}

document.querySelector('#newcommentForm').addEventListener('submit', commentHandler);