$(function() {

　//　トップへ戻るボタン
　$('#top-btn').click(function(){
    $('html,body').animate({
        'scrollTop': 0
    },'slow');
  });

  // お問い合わせフォーム
  $('#form-show').click(function(){
      $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function(){
      $('#signup-modal').fadeOut();
  });

　//　contents-itemのhover部分
  $(`.contents-item`).hover(
      function() {
        $(this).find(`.text-contents`).addClass(`text-active`);
      },
      function() {
        $(this).find(`.text-contents`).removeClass(`text-active`);
      }
  )
});