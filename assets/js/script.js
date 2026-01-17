$(document).ready(function() {
    // Hamburger menu toggle
    $('#menu').click(function() {
        $('.navbar').toggleClass('nav-toggle');
    });

    // Smooth scrolling
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        const id = $(this).attr('href');
        const offset = $(id).offset().top - 100;
        $('html, body').animate({ scrollTop: offset }, 800);
        $('.navbar').removeClass('nav-toggle');
    });

    // Active section highlighting
    $(window).on('scroll', function() {
        let current = '';
        
        $('section').each(function() {
            let top = $(this).offset().top;
            let bottom = top + $(this).outerHeight();
            
            if ($(window).scrollTop() >= top - 150) {
                current = $(this).attr('id');
            }
        });

        $('.navbar a').removeClass('active');
        if (current) {
            $(`.navbar a[href="#${current}"]`).addClass('active');
            $('section').removeClass('active');
            $(`#${current}`).addClass('active');
        }
    });

    // Load skills dynamically
    fetch('data/skills.json')
        .then(res => res.json())
        .then(data => {
            let skillsHTML = '';
            data.skills.forEach(skill => {
                skillsHTML += `
                    <div class="skill-card">
                        <h3>${skill.category}</h3>
                        <ul>
                            ${skill.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `;
            });
            $('#skillsContainer').html(skillsHTML);
        });

    // Load projects dynamically
    fetch('data/projects/projects.json')
        .then(res => res.json())
        .then(data => {
            let projectsHTML = '';
            data.projects.forEach(project => {
                projectsHTML += `
                    <div class="project-card">
                        <img src="${project.image}" alt="${project.title}">
                        <div class="project-card-content">
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                            <a href="${project.link}" target="_blank" class="project-link">View Project →</a>
                        </div>
                    </div>
                `;
            });
            $('#projectsContainer').html(projectsHTML);
        });

    // Typed.js for typing effect
    const options = {
        strings: [
            'Senior Quality Analyst',
            'Test Automation Expert',
            'QA Professional'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        loopCount: Infinity,
        showCursor: true,
        cursorChar: '|'
    };
    
    if ($('.typing-text').length > 0) {
        new Typed('.typing-text', options);
    }

    // Contact form
    emailjs.init("YOUR_PUBLIC_KEY");
    
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        const formData = {
            from_name: $(this).find('input[type="text"]').val(),
            from_email: $(this).find('input[type="email"]').val(),
            message: $(this).find('textarea').val(),
            to_email: 'singhashutosh200@gmail.com'
        };

        emailjs.send('service_id', 'template_id', formData)
            .then(() => {
                alert('Message sent successfully!');
                this.reset();
            })
            .catch(error => console.log('Error:', error));
    });

    // Scroll Reveal
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('section', {
            distance: '50px',
            duration: 1000,
            delay: 200,
            origin: 'bottom'
        });
    }
});
