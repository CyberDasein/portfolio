
$(function() {
    let filter = $("[data-filter]");
    filter.on("click", function(event){
        event.preventDefault();
        let cat =  $(this).data("filter");

        if(cat == "All") {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function(){
                let workCat = $(this).data("cat");
                
                if(workCat != cat) {
                    $(this).addClass("hide");
                }
            });
        }      
    });

    let modalCall = $("[data-modal]");
    let modalClose = $("[ data-close]");
    modalCall.on("click", function(event){
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data("modal");

        $(modalId).addClass("show");
        $("body").addClass("no-scroll");
        

        setTimeout(function(){
            $(modalId).find(".modal__dialogs").css({
                transform: "rotateX(0)"
            })
        },200);

        $("#worsSkider").slick("setPosition");

    });

    modalClose.on("click", function(event){
        event.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents(".modal");

        modalParent.find(".modal__dialogs").css({
                transform: "rotateX(90deg)"
            })

        setTimeout(function(){
            modalParent.removeClass("show");
            $("body").removeClass("no-scroll");
        },200);      
    });

        
    $(".modal").on("click", function(event){
        $(this).removeClass("show");
        $("body").removeClass("no-scroll");
    });
        
    $(".modal__dialogs").on("click", function(event){
        event.stopPropagation();
    });

    // slider
    $('[data-slider = "worksSlider"]').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
      });
      $(".slickPrev").on("click", function(event){
          event.preventDefault();
          let currentSlider = $(this).parents(".modal").find('[data-slider = "worksSlider"]');
          currentSlider.slick("slickPrev")
      })
      $(".slickNext").on("click", function(event){
        event.preventDefault();
        let currentSlider = $(this).parents(".modal").find('[data-slider = "worksSlider"]');
        currentSlider.slick("slickNext")
    })



    $("#navToggle").on("click", function(event){
        event.preventDefault();
        $("#nav").toggleClass("show");
    });

});