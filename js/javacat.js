$(document).ready(() => {

const $btn1 = $('.btn1');
const $btn2 = $('.btn2');
const $introbtn = $('#introbtn');
const $voegToe = $('#voegToe')

$('#result').hide()

$btn1.on('mouseenter', () => {
  $btn1.addClass('btn-active');
  })

  $btn1.on('mouseleave', () => {
    $btn1.removeClass('btn-active');
    })

$btn2.on('mouseenter', () => {
  $btn2.addClass('btn-active');
  })

  $btn2.on('mouseleave', () => {
    $btn2.removeClass('btn-active');
    })

  $introbtn.on('click', () =>{
    $('.introtxt').slideToggle(400);
    })

  $voegToe.on('click', () =>{
    $('#result').show()
  })
});
