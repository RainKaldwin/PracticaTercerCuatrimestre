const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const allSections = document.querySelector('.main-content');


function PageTransition(){
    // Select all buttons with the class 'control'
    const secBtn = document.querySelectorAll('.control');

    // Iterate over each button and add a click event listener
    for(let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function() {
            // Remove the 'active-btn' class from all buttons
            const currentBtn = document.querySelectorAll('.active-btn');
            if (currentBtn.length > 0) {
                currentBtn[0].classList.remove('active-btn');
            }

            // Add the 'active-btn' class to the clicked button
            this.classList.add('active-btn');
        });
    }

    //section active class

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove 'active' class from all buttons
            secBtns.forEach((btn) => {
                btn.classList.remove('active');
            }); // Added closing parenthesis for forEach loop
       
            e.target.classList.add('active');

            //hide other sections

            sections.forEach((section)=>{
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
       
    });
}

// Call the function to enable the page transitions
PageTransition();