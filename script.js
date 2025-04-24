  // Navigation Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
  });

  // Scroll Header Effect
  window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });

  // Animated text
  function animateText() {
      const text = document.querySelector('.animated-text');
      const string = text.textContent;
      text.innerHTML = '';
      
      for (let i = 0; i < string.length; i++) {
          const span = document.createElement('span');
          span.textContent = string[i];
          span.style.animationDelay = `${i * 0.05}s`;
          text.appendChild(span);
      }
      
      // Add cursor at the end
      const cursor = document.createElement('span');
      cursor.className = 'cursor';
      text.appendChild(cursor);
  }

  // GSAP Animations
  document.addEventListener('DOMContentLoaded', function() {
      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);
      
      // Hero Section Animation
      gsap.to('#hero', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out'
      });
      
      animateText();
      
      // About Section Animation
      gsap.to('#about', {
          scrollTrigger: {
              trigger: '#about',
              start: 'top 80%',
          },
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
      });
      
      // Projects Section Animation
      gsap.to('#projects', {
          scrollTrigger: {
              trigger: '#projects',
              start: 'top 80%',
          },
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
      });
      
      // Project Cards Animation
      gsap.utils.toArray('.project-card').forEach((card, i) => {
          gsap.to(card, {
              scrollTrigger: {
                  trigger: card,
                  start: 'top 90%',
              },
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: i * 0.1,
              ease: 'power3.out'
          });
      });
      
      // Contact Section Animation
      gsap.to('#contact', {
          scrollTrigger: {
              trigger: '#contact',
              start: 'top 80%',
          },
          opacity: 1,
          duration: 1,
          ease: 'power3.out'
      });
  });