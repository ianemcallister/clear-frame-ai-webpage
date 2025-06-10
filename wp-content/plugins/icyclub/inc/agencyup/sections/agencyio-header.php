<?php 
if ( ! function_exists( 'icycp_agencyio_call__header' ) ) :
    function icycp_agencyio_call__header() {

          $hide_show_call_btn = get_theme_mod('hide_show_call_btn','1');
          $call_us_icon = get_theme_mod('call_us_icon','fa-phone');
          $call_us_label = get_theme_mod('call_us_label','Call us'); 
          $call_us_number = get_theme_mod('call_us_number','+ (007) 548 58 5400');
          
           if($hide_show_call_btn ='1') {  ?>
            <div class="media head_widget mr-3">
                  <div class="ta-header-box-icon">
                          <i class="fa <?php echo esc_attr($call_us_icon); ?>"></i>
                        </div>
                  <div class="media-body"> 
                  <?php  echo esc_html($call_us_label); ?>
                 <h5 class="mt-0"> <?php echo esc_html($call_us_number); ?> </h5>
              </div>
            </div>
            <?php } ?>
<?php
}
endif;
add_action('icycp_agencyio_call_header', 'icycp_agencyio_call__header');