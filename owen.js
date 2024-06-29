
        window.addEventListener('scroll', function() {
            const sections = document.querySelectorAll('section, footer');
            const navLinks = document.querySelectorAll('.navbar a');
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 60) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });

        function updateMainPicture(src) {
            const mainPicture = document.getElementById('main-about-picture');
            mainPicture.src = src;
        }

        function updateMainWorksPicture(src) {
            const mainWorksPicture = document.getElementById('main-works-picture');
            mainWorksPicture.src = src;
        }

        function updateNewContentPicture(src) {
            const newContentPicture = document.getElementById('new-content-picture');
            newContentPicture.src = src;
        }

        function updateAdditionalContentPicture(src) {
            const additionalContentPicture = document.getElementById('additional-content-picture');
            additionalContentPicture.src = src;
        }
  