

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const formData = new FormData(form);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };
            
            if (!data.name || !data.email || !data.message) {
                alert('All fields are required');
                return;
            }
            
            console.log('Form Data:', data);
            alert('Form submitted!');
            
            fetch('mail.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(result => console.log('Success:', result))
            .catch(error => console.error('Error:', error));
        });
    }
});
