$(document).ready(function() {

  var config = {
    apiKey: "AIzaSyDL1h7JikKbgv0P_hgG0zA75etR7adOVhc",
    authDomain: "krypted-landing.firebaseapp.com",
    databaseURL: "https://krypted-landing.firebaseio.com",
    projectId: "krypted-landing",
    storageBucket: "",
    messagingSenderId: "788246000580"
  };

  firebase.initializeApp(config);
  firebase.auth().signInAnonymously();

  /* For the sticky navigation */
  $('.js--section-features').waypoint(function(direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });


  /* Scroll on buttons */
  $('.js--scroll-to-plans').click(function() {
    $('html, body').animate({ scrollTop: $('.js--section-plans').offset().top }, 1000);
  });

  $('.js--scroll-to-start').click(function() {
    $('html, body').animate({ scrollTop: $('.js--section-features').offset().top }, 1000);
  });


  /* Animations on scroll */
  $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function(direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js--wp-3').waypoint(function(direction) {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function(direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '50%'
  });


  /* Mobile navigation */
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

  $('.submit-button').click(function(e) {

    var subscriber = firebase.database().ref("subscribers/"),
      name = $('#name').val(),
      email = $('#email').val(),
      news = $('#news').val() === 'on';

    var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(email) || !name) {
      return $('.alert').text('Please enter a valid email.');
    }
    e.preventDefault();
    subscriber.push({
      "email": email,
      "name": name,
      "allow_news": news,
    });
    $('.contact-form').fadeOut();
    $('.success-message').fadeIn();

  });
});