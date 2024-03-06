jQuery(document).ready(function () {
    
                let all_stars = $('.ratting---java-1');
    
                function bg_size(el) {
                    el.css("background-size", "100%");
                }
                function bg_image(ele) {
                    ele.css("background-image", "linear-gradient(90deg,#d4a017,#d4a017)");
                }

                function starFiller(this_star){
                    let this_val = this_star.data('ratting');
                    let dec_star = parseInt(this_val);
                    let flt_star = parseFloat(this_val);
                    let point_val = flt_star - dec_star;
                    let point_bg = (point_val * 100).toFixed(0) + "%";
    
                    if(this_val < 0){
                        this_star.find('.ratting----java--1').html("0");
                    }
                    if(this_val > 5){
                        this_star.find('.ratting----java--1').html("5");
                    }
                    else {
                        this_star.find('.ratting----java--1').html(this_val);
                    }
                    
                    if (dec_star == 1) {
                        bg_size(this_star.find(".java-1"));
                        this_star.find(".java-2").css("background-size", point_bg);
                        bg_image(this_star.find(".java-1 , .java-2"));
    
                    }
                    else if (dec_star == 2) {
                        bg_size($(".java-1 , .java-2 "));
                        this_star.find(".java-3").css("background-size", point_bg);
                        bg_image(this_star.find(".java-1 , .java-2 , .java-3"));
                        
                    }
                    else if (dec_star == 3) {
                        bg_size($(".java-1 , .java-2 , java-3 "));
                        this_star.find(".java-4").css("background-size", point_bg);
                        bg_image(this_star.find(".java-1 , .java-2 , .java-3 , .java-4"));
                    }
                    else if (dec_star == 4) {
                        bg_size($(".java-1 , .java-2 , java-3 ,java-4 "));
                        this_star.find(".java-5").css("background-size", point_bg);
                        bg_image(this_star.find(".java-1 , .java-2 , .java-3 , .java-4 , .java-5")); 
                    }
                    else if (dec_star <= 0  ) {
                        
                    }
                    else {
                        bg_size($(".java-1 , .java-2 , java-3 , java-4 , java-5 "));
                        bg_image(this_star.find(".java-1 , .java-2 , .java-3 , .java-4 , .java-5"));
                    } 
                }
    
                $.each(all_stars, function(){
    
                    let this_star = $(this);
                    starFiller(this_star);                   
    
    
                });
                
            });