jQuery(document).ready(function( $ ) {

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},50, 'easeInOutExpo');
    return false;
  });

  // Header fixed on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Real view height for mobile devices
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#intro').css({ height: $(window).height() });
  }

  // Initiate the wowjs animation library
  new WOW().init();

  // Initialize Venobox
  $('.venobox').venobox({
    bgcolor: '',
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff'
  });

  // Initiate superfish on nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Mobile Navigation
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Smooth scroll for the menu and links with .scrollto classes
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 400, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });
  // Get modal and close button elements
const modal = document.getElementById("bookingModal");
const closeModalBtn = document.getElementById("closeModalBtn");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Close modal when close button is clicked
closeModalBtn.onclick = function() {
    closeModal();
}

// Close modal when user clicks outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Attach event listeners to all buttons and links with the class 'open-modal'
const bookNowBtns = document.querySelectorAll(".open-modal");

bookNowBtns.forEach(btn => {
    btn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior in case it's an <a> tag
        openModal();
    });
});

  // Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center:true,
    responsive: { 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: {items: 5}
    }
  });

  // Buy tickets select the ticket type on click
  $('#buy-ticket-modal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var ticketType = button.data('ticket-type');
    var modal = $(this);
    modal.find('#ticket-type').val(ticketType);
  })

// custom code

});




                     // nav button 

 // Get the modal
 var modal = document.getElementById("bookingModal");

 // Get the button that opens the modal
 var btn = document.getElementById("openModalBtn");

 // Get the <span> element that closes the modal
 var span = document.getElementById("closeModalBtn");

 // When the user clicks the button, open the modal
 btn.onclick = function() {
     modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

//

document.getElementById('bookevent').addEventListener('click',function (params) {
  document.getElementById('openModalBtn').click();
});

//
            //  contact us form

            document.addEventListener("DOMContentLoaded", function() {
              const form = document.querySelector(".contactForm");
              const submitBtn = document.getElementById("submitBtn");
              const sendMessageDiv = document.getElementById("sendmessage");
              const errorMessageDiv = document.getElementById("errormessage");
            
              submitBtn.addEventListener("click", function(event) {
                event.preventDefault();
            
                // Perform simple validation
                let valid = true;
                const name = form.name.value.trim();
                const email = form.email.value.trim();
                const subject = form.subject.value.trim();
                const message = form.message.value.trim();
            
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
                if (name.length < 4) {
                  showValidationError(form.name, "Please enter at least 4 characters for your name.");
                  valid = false;
                } else {
                  hideValidationError(form.name);
                }
            
                if (!emailRegex.test(email)) {
                  showValidationError(form.email, "Please enter a valid email address.");
                  valid = false;
                } else {
                  hideValidationError(form.email);
                }
            
                if (subject.length < 4) {
                  showValidationError(form.subject, "Please enter at least 4 characters for the subject.");
                  valid = false;
                } else {
                  hideValidationError(form.subject);
                }
            
                if (message.length === 0) {
                  showValidationError(form.message, "Please write something in the message.");
                  valid = false;
                } else {
                  hideValidationError(form.message);
                }
            
                if (valid) {
                  // Simulate a successful form submission
                  sendMessageDiv.style.display = "block";
                  errorMessageDiv.style.display = "none";
            
                  // Clear form fields after submission
                  form.name.value = '';
                  form.email.value = '';
                  form.subject.value = '';
                  form.message.value = '';
                } else {
                  errorMessageDiv.style.display = "block";
                  sendMessageDiv.style.display = "none";
                }
              });
            
              function showValidationError(inputElement, message) {
                const validationDiv = inputElement.nextElementSibling;
                validationDiv.textContent = message;
                validationDiv.style.display = "block";
              }
            
              function hideValidationError(inputElement) {
                const validationDiv = inputElement.nextElementSibling;
                validationDiv.style.display = "none";
              }
            });
            

// gallery curosel
$(document).ready(function(){
  var owl = $('.gallery-carousel');
  owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: false
  });
  
  $('.left-btn').click(function() {
    owl.trigger('prev.owl.carousel');
  });

  $('.right-btn').click(function() {
    owl.trigger('next.owl.carousel');
  });
});

// gallery zoom
$(document).ready(function() {
  // Initialize Owl Carousel
  var owl = $('.gallery-carousel');
  owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      nav: false
  });

  // Navigation Buttons
  $('.left-btn').click(function() {
    owl.trigger('prev.owl.carousel');
  });

  $('.right-btn').click(function() {
    owl.trigger('next.owl.carousel');
  });

  // Initialize Venobox for zoom effect
  $('.venobox').venobox({
    spinner: 'wave',  // You can customize this or remove it for default
    share: false,     // Disable the share button if not needed
    bgcolor: '#fff',  // Background color
    overlayColor: 'rgba(0,0,0,0.85)', // Overlay color
    titleattr: 'data-title', // Attribute to use for the title
  });
});

// video


// document.querySelectorAll('.play-btn').forEach((btn) => {
//     btn.addEventListener('click', function() {
//         const videoItem = this.closest('.video-item');
//         const videoPlayer = videoItem.querySelector('.video-player');
        
//         // Pause other videos
//         document.querySelectorAll('.video-item .video-player').forEach(video => {
//             if (video !== videoPlayer) {
//                 video.pause();
//                 video.closest('.video-item').classList.remove('fullscreen');
//                 video.closest('.video-item').querySelector('.play-btn').innerHTML = '&#9654;'; // Play icon
//             }
//         });

//         if (!videoItem.classList.contains('fullscreen')) {
//             videoItem.classList.add('fullscreen');
//             videoPlayer.play();
//             this.innerHTML = '&#10074;&#10074;'; // Pause icon
//         } else {
//             videoItem.classList.remove('fullscreen');
//             videoPlayer.pause();
//             this.innerHTML = '&#9654;'; // Play icon
//         }
//     });
// });

// document.querySelector('.left-btn').addEventListener('click', function() {
//     const carousel = document.querySelector('.video-carousel');
//     carousel.scrollBy({
//         left: -carousel.clientWidth * 0.3, // Adjust scroll amount if needed
//         behavior: 'smooth'
//     });
// });

// document.querySelector('.right-btn').addEventListener('click', function() {
//     const carousel = document.querySelector('.video-carousel');
//     carousel.scrollBy({
//         left: carousel.clientWidth * 0.3, // Adjust scroll amount if needed
//         behavior: 'smooth'
//     });
// });

