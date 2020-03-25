/*document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close')
  const switchModal = () => {modal.classList.toggle('modal--visible');}
  
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
    });
  
  closeBtn.addEventListener('click', switchModal);

});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');
  
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  var thanks = $('.thanks'),
    closeBtn = $('.thanks__close');
      closeBtn.on('click', function () {
      thanks.toggleClass('thanks--visible');
    });

  next.css('left', prev.width() + 10 + bullets.width() + 10 )
  bullets.css('left', prev.width() + 10 )

  new WOW().init();

  //Валидация формы
  $('.control__form').validate({
    errorClass: "invalid",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
  },
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: {
        required: true,
      },
    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче 2-х букв",
        maxlength: "Имя должно быть не длиннее 15 букв"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Телефон содержит 10 цифр"
      },
      policyCheckbox: {
        required: "Отметьте флажком"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          thanks.toggleClass('thanks--visible');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
  },
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      userQuestion : {
        required: true,
        maxlength: 255
      },
      policyCheckbox: {
        required: true,
      },

    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче 2-х букв",
        maxlength: "Имя должно быть не длиннее 15 букв"
     },
     userPhone: {
      required: "Заполните поле",
      minlength: "Телефон содержит 10 цифр"
    },
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите корректный Email"
      },
      userQuestion: {
        required: "Заполните поле",
        maxlength: "Имя должно быть не длиннее 255 букв"
      },
      policyCheckbox: {
        required: "Отметьте флажком"
      }},
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            thanks.toggleClass('thanks--visible');
            $(form)[0].reset();
            modal.removeClass('modal--visible');
          }
        });
      }
  });

  $('.modal__form').validate({
    errorClass: "invalid",
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').append(error);
      }
  
       error.insertAfter($(element));
  },
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      // compound rule
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: {
        required: true,
      },
    }, //сообщения
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя должно быть не короче 2-х букв",
        maxlength: "Имя должно быть не длиннее 15 букв"
     },
     userPhone: {
      required: "Заполните поле",
      minlength: "Телефон содержит 10 цифр"
    },
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите корректный Email"
      },
      policyCheckbox: {
        required: "Отметьте флажком"
    }},
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          thanks.toggleClass('thanks--visible');
          $(form)[0].reset();
          modal.toggleClass('modal--visible');
        }
      });
    }
  });

  //маска для номера телефона

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

  $(document).ready(function() {
 
 
    $("a.nav__item").click(function() {
       $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top - 88 + "px"
       }, {
          duration: 500,
          easing: "swing"
       });
       return false;
    });  
 });
 $(document).ready(function() {
 
 
  $("a.hero__scroll-down").click(function() {
     $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 200 + "px"
     }, {
        duration: 500,
        easing: "swing"
     });
     return false;
  });  
});
$(document).ready(function() {
 
 
  $("a.up").click(function() {
     $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top - 200 + "px"
     }, {
        duration: 500,
        easing: "swing"
     });
     return false;
  });  
});
  var player
  $('.video__play').on('click' , function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'nFWxi3zbsNo',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  }
  
  //Yandex map
  // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    // function createMap () {
    //   var myMap = new ymaps.Map ('map', {
    //     center: [55.76, 37.64],
    //     zoom: 7
    //   });
    // }
    setTimeout(function() {
      var elem = document.createElement('script');
      elem.type = 'text/javascript';
      elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=74984f3d-45ab-4643-8a3d-0210e2b7a360&lang=ru_RU&onload=createMap';
      document.getElementsByTagName('body')[0].appendChild(elem);
    }, 5000);    
});