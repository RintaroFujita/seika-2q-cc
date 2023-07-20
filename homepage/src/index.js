const validator = new JustValidate('#basic_form');

validator
    .addField('#basic_name', [
        {
            rule: 'required',
            errorMessage: '必須項目です'
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: '3文字以上で入力してください',
        },
        {
            rule: 'maxLength',
            value: 15,
            errorMessage: '15文字以上で入力してください'
        },
    ])
    .addField('#basic_email', [
        {
            rule: 'required',
            errorMessage: '必須項目です'
        },
        {
            rule: 'email',
            errorMessage: 'メールアドレスの形式で入力してください'
        },
    ])
    .addField('#basic_password', [
        {
            rule: 'required',
            errorMessage: '必須項目です'
        },
        {
            rule: 'password',
            errorMessage: 'アルファベットと数字で8文字以上で設定してください'
        },
    ])
    .addField('#basic_age', [
        {
            rule: 'required',
            errorMessage: '必須項目です'
        },
        {
            rule: 'number',
            errorMessage: '数字のみで入力してください'
        },
        {
            rule: 'minNumber',
            value: 18,
            errorMessage: '18以上で入力してください'
        },
        {
            rule: 'maxNumber',
            value: 150,
            errorMessage: '150以下で入力してください'
        },
    ])
    .addField('#basic_address', [
        {
            rule: 'required',
            errorMessage: '必須項目です'
        },
    ]);
const swiper = new Swiper('.swiper', {
    // Optional parameters

    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

let Ge = new Swiper(".swiper-1", {
    loop: true,
    pagination: {
        el: ".swiper-pagination-1"
    },
    navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1"
    },
});

let Ye = document.getElementById("swiper-title-1");
let Ne = document.createTextNode("スライド " + (Ge.realIndex + 1) + " を表示しています。");
Ye.appendChild(Ne);

Ge.on("slideChange", function () {
    console.log(Ge.realIndex);
    Ne.remove();
    Ne = document.createTextNode("スライド " + (Ge.realIndex + 1) + " を表示しています。");
    Ye.appendChild(Ne);
});



const Ve = new Swiper(".swiper-2", {
    loop: true,
    pagination: {
        el: ".swiper-pagination-2"
    },
    navigation: {
        nextEl: ".swiper-button-next-2",
        prevEl: ".swiper-button-prev-2"
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

let je = ["被害者1", "被害者2", "被害者3"];
let Re = document.getElementById("swiper-title-2");
let qe = document.createTextNode(je[Ve.realIndex]);
Re.appendChild(qe);

Ve.on("slideChange", function () {
    console.log(Ve.realIndex);
    qe.remove();
    qe = document.createTextNode(je[Ve.realIndex]);
    Re.appendChild(qe);
});


window.addEventListener("resize", function () {
    VANTA.HALO.resize();
  });
  
  VANTA.HALO({
    el: "#haloBlock",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: window.innerHeight,
    minWidth: window.innerWidth,
    amplitudeFactor: 1,
    size: 0.8,
  });
  