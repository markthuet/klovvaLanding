// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
});


// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('active');

            // Toggle icon between menu and X
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileNav.classList.contains('active')) {
                icon.setAttribute('data-lucide', 'x');
            } else {
                icon.setAttribute('data-lucide', 'menu');
            }

            // Reinitialize icons after change
            lucide.createIcons();
        });

        // Close mobile menu when clicking on links
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add scroll effect to navbar
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });
});

// Button click handlers
document.addEventListener('DOMContentLoaded', function() {
    // Demo button handlers
    const demoBtns = document.querySelectorAll('.demo-btn, .btn:contains("Demo")');
    demoBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Demo functionality would be implemented here. This would redirect to an interactive demo or video.');
        });
    });

    // CTA button handlers
    const ctaBtns = document.querySelectorAll('.btn:contains("Start"), .btn:contains("Get Started")');
    ctaBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Sign-up functionality would be implemented here. This would redirect to the registration page.');
        });
    });

    // Contact sales handlers
    const salesBtns = document.querySelectorAll('.btn:contains("Contact Sales")');
    salesBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Contact sales functionality would be implemented here. This would open a contact form or redirect to a sales page.');
        });
    });
});

// Add animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards and pricing cards
    const animatedElements = document.querySelectorAll('.feature-card, .pricing-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Navigation between landing page, app, sign-in, and demo
function showApp() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('app-interface').classList.remove('hidden');
    document.getElementById('sign-in-page').classList.add('hidden');
    document.getElementById('demo-page').classList.add('hidden');
    document.body.style.overflow = 'hidden';

    lucide.createIcons();
}

function showLanding() {
    document.getElementById('landing-page').style.display = 'block';
    document.getElementById('app-interface').classList.add('hidden');
    document.getElementById('sign-in-page').classList.add('hidden');
    document.getElementById('demo-page').classList.add('hidden');
    document.body.style.overflow = 'auto';

    // Show the original navbar when returning to landing page
    document.querySelector('.navbar').style.display = 'block';

    lucide.createIcons();
}

function showSignIn() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('app-interface').classList.add('hidden');
    document.getElementById('sign-in-page').classList.remove('hidden');
    document.getElementById('demo-page').classList.add('hidden');
    document.body.style.overflow = 'auto';

    // Show the original navbar on sign in page
    document.querySelector('.navbar').style.display = 'block';

    lucide.createIcons();
}

function showDemo() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('app-interface').classList.add('hidden');
    document.getElementById('sign-in-page').classList.add('hidden');
    document.getElementById('demo-page').classList.remove('hidden');
    document.body.style.overflow = 'auto';

    // Hide the original navbar when in demo mode
    document.querySelector('.navbar').style.display = 'none';

    lucide.createIcons();
}

function handleSignIn() {
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;

    if (email && password) {
        alert('Sign in functionality would be implemented here. This would authenticate the user and redirect to the dashboard.');
    } else {
        alert('Please enter both email and password.');
    }
}

// Demo page tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const demoTabs = document.querySelectorAll('.demo-tab');
    const demoContents = document.querySelectorAll('.demo-content');

    demoTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;

            // Remove active class from all tabs and contents
            demoTabs.forEach(t => t.classList.remove('active'));
            demoContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // Reinitialize icons after tab switch
            lucide.createIcons();
        });
    });
});

// App tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const appTabs = document.querySelectorAll('.app-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    appTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;

            // Remove active class from all tabs and contents
            appTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');

            // Reinitialize icons after tab switch
            lucide.createIcons();
        });
    });
});

// AI Assistant chat functionality
document.addEventListener('DOMContentLoaded', function() {
    const aiInput = document.getElementById('aiInput');
    const quickPrompts = document.querySelectorAll('.prompt-btn');

    // Handle quick prompts
    quickPrompts.forEach(btn => {
        btn.addEventListener('click', function() {
            const promptText = this.textContent.trim();
            handleAiMessage(promptText);
        });
    });

    // Handle AI input
    if (aiInput) {
        aiInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim()) {
                handleAiMessage(this.value.trim());
                this.value = '';
            }
        });
    }

    function handleAiMessage(message) {
        const chatMessages = document.querySelector('.chat-messages');

        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user';
        userMessage.innerHTML = `
            <div class="message-avatar">
                <i data-lucide="user"></i>
            </div>
            <div class="message-content">
                <p>${message}</p>
                <span class="message-time">Just now</span>
            </div>
        `;
        chatMessages.appendChild(userMessage);

        // Simulate AI response after a delay
        setTimeout(() => {
            const aiResponse = generateAiResponse(message);
            const assistantMessage = document.createElement('div');
            assistantMessage.className = 'message assistant';
            assistantMessage.innerHTML = `
                <div class="message-avatar">
                    <i data-lucide="bot"></i>
                </div>
                <div class="message-content">
                    <p>${aiResponse}</p>
                    <span class="message-time">Just now</span>
                </div>
            `;
            chatMessages.appendChild(assistantMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Reinitialize icons
            lucide.createIcons();
        }, 1000);

        chatMessages.scrollTop = chatMessages.scrollHeight;
        lucide.createIcons();
    }

    function generateAiResponse(message) {
        const responses = {
            'high priority': 'You have 3 high priority bills requiring immediate attention: HB 101 (Broadband Access), SB 89 (Healthcare Access), and HB 205 (Clean Energy). I recommend scheduling stakeholder meetings for bills under 50% progress.',
            'performance metrics': 'Your current performance shows: 87% success rate, $455K in active contracts, 12 active bills, and 8 active clients. You\'re performing above industry average.',
            'immediate attention': 'Bills requiring immediate attention: HB 101 has a committee hearing on Jan 25th, and SB 89 needs testimony preparation by Jan 30th. Both are high priority.',
            'techcorp': 'TechCorp Industries portfolio includes 3 active bills with a total contract value of $125K. Their primary focus is on broadband and technology infrastructure legislation.',
            'default': 'I can help you analyze bills, track progress, manage client relationships, and provide strategic insights. Try asking about specific bills, performance metrics, or client portfolios.'
        };

        const lowerMessage = message.toLowerCase();
        for (const key in responses) {
            if (lowerMessage.includes(key)) {
                return responses[key];
            }
        }
        return responses.default;
    }
});