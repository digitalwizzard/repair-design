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
          alert('Форма отправлена, наши менеджеры скоро свяжутся с вами!');
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
      },
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
          alert('Форма отправлена, наши менеджеры скоро свяжутся с вами!');
          $(form)[0].reset();
          modal.toggleClass('modal--visible');
        }
      });
    }
  });

  //маска для номера телефона

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
  
});