const blogid = document.querySelector('input[name="blog-id"]').value;
const handleEdit = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#edit-title').value;
    const content = document.querySelector('#edit-content').value;

    await fetch(`/api/blogpost/${blogid}`, {

        method: 'PUT',
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    document.location.replace('/dashboard');
}

const handleDelete = async () => {
    await fetch(`/api/blogppst/${blogid}`, {
        method: 'DELETE'
    });
    document.location.replace('/dashboard');
}

document
    .querySelector('#edit-btn')
    .addEventListener('click', handleEdit);

document
    .querySelector('#delete-btn')
    .addEventListener('click', handleDelete);
    