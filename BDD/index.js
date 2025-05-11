$(document).ready(function() {
$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  focusOnSelect: true,
  cssEase: 'linear',
  touchMove: true,
  prevArrow:'<button class="slick-prev"> < </button>',
  nextArrow:'<button class="slick-next"> > </button>',
  
  //         responsive: [                        
  //             {
  //               breakpoint: 576,
  //               settings: {
  //                 centerMode: false,
  //                 variableWidth: false,
  //               }
  //             },
  //         ]
});


var imgs = $('.slider img');
imgs.each(function(){
  var item = $(this).closest('.item');
  item.css({
    'background-image': 'url(' + $(this).attr('src') + ')', 
    'background-position': 'center',            
    '-webkit-background-size': 'cover',
    'background-size': 'cover', 
  });
  $(this).hide();
});

$('a[data-modal]').click(function(event) {
    $(this).modal();
    return false;
  });

  // Modal

//   $('#showModal').click(() => {
//     // $('#modalId').modal();
//     // console.log($(this))
//   });
    $('.slider .item').click(function() {
        console.log(this)
        $('#modalId img')[0].src = $(this).find('img')[0].src;
        $('#modalId').modal();
    });
  
});