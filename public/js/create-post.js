const newFormHandler = async function(event) {
    event.preventDefault();
  
    const title = document.getElementById("post-title").value;
    const body = document.getElementById("post-content").value;
  
    await fetch(`/api/posts/create`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    .querySelector('#new-post-form')
    .addEventListener('click', newFormHandler);