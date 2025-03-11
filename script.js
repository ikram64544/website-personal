
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Page Loader
    setTimeout(() => {
      document.querySelector('.loader').classList.add('hidden');
    }, 2000);
  
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
  
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
      }, 100);
    });
  
    document.addEventListener('mousedown', function() {
      cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });
  
    document.addEventListener('mouseup', function() {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  
    // Apply hover effect for links, buttons, and inputs
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.backgroundColor = 'rgba(0, 116, 228, 0.1)';
        cursorFollower.style.borderWidth = '0px';
      });
      
      element.addEventListener('mouseleave', () => {
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.backgroundColor = 'transparent';
        cursorFollower.style.borderWidth = '1px';
      });
    });
  
    // Header Scroll Effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Intersection Observer for Scroll Animations
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            
            // Initialize skill bars when skills section is in view
            if (entry.target.classList.contains('skills')) {
              initSkillBars();
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
  
    // Initialize Skill Bars Animation
    function initSkillBars() {
      const skillBars = document.querySelectorAll('.skill-progress');
      
      skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.width = progress + '%';
      });
    }
  
    // Form Validation and Submission
    const contactForm = document.querySelector('.contact-form');
    const submitButton = document.querySelector('.submit-button');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        let isValid = true;
        
        // Simple validation
        if (!nameInput.value.trim()) {
          isValid = false;
          highlightInvalidInput(nameInput);
        } else {
          resetInput(nameInput);
        }
        
        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
          isValid = false;
          highlightInvalidInput(emailInput);
        } else {
          resetInput(emailInput);
        }
        
        if (!messageInput.value.trim()) {
          isValid = false;
          highlightInvalidInput(messageInput);
        } else {
          resetInput(messageInput);
        }
        
        if (isValid) {
          // Simulate form submission
          submitButton.innerHTML = 'Sending...';
          submitButton.disabled = true;
          
          setTimeout(() => {
            contactForm.reset();
            submitButton.innerHTML = 'Message Sent!';
            
            setTimeout(() => {
              submitButton.innerHTML = 'Send Message';
              submitButton.disabled = false;
            }, 3000);
          }, 1500);
        }
      });
    }
    
    function highlightInvalidInput(input) {
      input.style.borderColor = '#e74c3c';
      input.style.boxShadow = '0 0 0 3px rgba(231, 76, 60, 0.1)';
    }
    
    function resetInput(input) {
      input.style.borderColor = '';
      input.style.boxShadow = '';
    }
    
    function isValidEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  
    // Add Typing Effect to Hero Title (Optional Enhancement)
    const typingEffect = () => {
      const text = "M. Iqram Anugrah";
      let index = 0;
      const heroTitle = document.querySelector('.hero-title');
      
      if (heroTitle && window.innerWidth > 768) {
        heroTitle.innerHTML = `<span class="typing"></span><span class="highlight"> Anugrah</span>`;
        const typingElement = document.querySelector('.typing');
        
        const typingInterval = setInterval(() => {
          if (index < "M. Iqram".length) {
            typingElement.textContent += text.charAt(index);
            index++;
          } else {
            clearInterval(typingInterval);
          }
        }, 150);
      }
    };
    
    // Uncomment to enable typing effect
    // typingEffect();
  });
  