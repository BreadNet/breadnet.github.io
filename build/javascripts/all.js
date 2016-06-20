
(function() {

  $(function() {
    return $('.carousel').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      autoplay: true,
      cssEase: 'linear'
    });
  });

}).call(this);
