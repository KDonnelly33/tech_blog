handleNewPost = async (event) => {
    event.preventDefault();
    console.log("new post running")
    const title = document.querySelector('#new-title').value.trim();
    const content = document.querySelector('#new-body').value.trim();

    const response = await fetch('/api/blogpost', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert("Failed to create post")
    };
}

document
    .querySelector('#newpost-form')
    .addEventListener('submit', handleNewPost);

