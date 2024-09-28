// User data
const users = [
    { id: 1, email: 'user1@gmail.com', password: 'password1' },
    { id: 2, email: 'user2@gmail.com', password: 'password2' },
    // Add more users here
];

// Company data
const companies = [
    { id: 1, name: 'GfG', jobs: ['Web Developer', 'Graphic Designer'] },
    { id: 2, name: 'Geeksforgeeks', jobs: ['Software Engineer', 'Data Scientist'] },
    // Add more companies here
];

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const loginCard = document.querySelector('.login-card');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            alert(`Login successful for user ${user.email}`);
            // Redirect to index.html
            window.location.href = 'index.html';
        } else {
            console.log('Invalid email or password');
            alert('Invalid email or password');
        }
    });

    // Apply for company function
    const applyButton = document.querySelectorAll('.apply-button');

    applyButton.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const companyId = button.dataset.companyId;
            const jobId = button.dataset.jobId;

            const company = companies.find((company) => company.id === parseInt(companyId));
            const job = company.jobs.find((job) => job === jobId);

            if (company && job) {
                console.log(`Applied for ${job} at ${company.name}`);
                // Add logic to apply for the job
            } else {
                console.log('Invalid company or job');
                alert('Invalid company or job');
            }
        });
    });
});