<?php 
if( !class_exists( 'Gutentools_Page_Slider' ) ){

	class Gutentools_Page_Slider extends Gutentools_Block{

		public $slug = 'slider';

		/**
		* Title of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $title = '';
		public $count = 0;

		/**
		* Description of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $description = '';

		/**
		* SVG Icon for this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $icon = '';
		public $attrs = '';


	    protected static $instance;
	    
	    public static function get_instance() {
	        if ( null === self::$instance ) {
	            self::$instance = new self();
	        }
	        return self::$instance;
	    }

	    public function process_script(){
	    	
	        foreach ( $this->blocks as $block ) {
	        	
		    	$attrs = $this->get_attrs_with_default( $block[ 'attrs' ] );

		    	if ( ! empty( $attrs ) ) {

			    	$dimension_properties = [
					    'padding'            => 'padding', 
					    'titlePadding'       => 'padding', 
					    'excerptPadding'     => 'padding', 
					    'buttonPadding'      => 'padding', 
					    'buttonMargin'       => 'margin',
					    'buttonRadius'       => 'border-radius', 
					    'sliderMinHeight'    => 'min-height', 
					    'contentWidth'       => 'max-width', 
					    'arrowSize'          => 'size',
					    'arrowPositionRight' => 'right', 
					    'arrowPositionLeft'  => 'left', 
					    'arrowRadius'        => 'border-radius', 
					    'dotsRadius'         => 'border-radius', 
					    'dotsSize'           => 'size',
					    'arrowIconSize'      => 'font-size'
					];

					$typography_properties = [
						'titleTypo', 
						'excerptTypo', 
						'buttonTypo'
					];

					$dimensions = self::extract_properties( 'dimension', $attrs, $dimension_properties );
					$typographies = self::extract_properties( 'typography', $attrs, $typography_properties );
					extract($dimensions);											
					extract($typographies);											
		    			    			    	    		    			    			    	    		    	
			    	foreach( self::$devices as $device ){


						$devices_style = [
							'.gutentools-page-slider-wrapper' => array_merge(
								$sliderMinHeight[ $device ],
								$padding[ $device ]
							),
							'.gutentools-page-slider-content' => array_merge(
								$contentWidth[ $device ]
							),
							'.gutentools-page-title' => array_merge(
								$titlePadding[ $device ],
								$titleTypo[ $device ],
							),
							'.gutentools-page-excerpt' => array_merge(
								$excerptPadding[ $device ],
								$excerptTypo[ $device ],
							),
							'.gutentools-slider-custom-btn, .gutentools-slider-btn' => array_merge(
								$buttonRadius[ $device ],
								$buttonMargin[ $device ],
								$buttonTypo[ $device ],
								$buttonPadding[ $device ]
							),
							'.gutentools-slider-arrow' => array_merge(
								$arrowRadius[ $device ],
								$arrowIconSize[ $device ],
								$arrowSize[ $device ]
							),
							'.gutentools-next-arrow' => array_merge(
								$arrowPositionRight[ $device ]
							),
							'.gutentools-prev-arrow' => array_merge(
								$arrowPositionLeft[ $device ]
							),
							'.slick-dots li button' => array_merge(
								$dotsSize[ $device ],
								$dotsRadius[ $device ],
							)
						];			

						self::add_styles([
							'attrs' => $attrs,
							'css'   => $devices_style,
						], $device );
					}

					$desktop_css = [
					    '.gutentools-page-slider-overlay' => [
					        'background-color' => $attrs['overlay'],
					        'opacity' => $attrs['opacity'],
					    ],
					    '.gutentools-page-title, .gutentools-page-excerpt' => [
					        'color' => $attrs['titleColor'],
					    ],
					    '.gutentools-slider-btn' => [
						    'color' => $attrs['buttonColor'],
						    'background-color' => $attrs['buttonBGColor'],
						],
					    '.gutentools-slider-btn:hover' => [
						    'color' => $attrs['buttonHoverColor'],
						    'background-color' => $attrs['buttonBGHoverColor'],
						],
						'.gutentools-slider-custom-btn' => [
						    'color' => $attrs['customBtnColor'],
						    'background-color' => $attrs['customBtnBGColor'],
						],
					    '.gutentools-slider-custom-btn:hover' => [
						    'color' => $attrs['customBtnHoverColor'],
						    'background-color' => $attrs['customBtnBGHoverColor'],
						],
						'.gutentools-slider-arrow' => [
					        'color' => $attrs['arrowColor'],
					        'background-color' => $attrs['arrowBGColor'],
					    ],
					    '.gutentools-slider-arrow:hover' => [
					        'color' => $attrs['arrowHoverColor'],
					        'background-color' => $attrs['arrowBGHoverColor'],
					    ],
					    '.slick-dots li.slick-active button' => [
					        'opacity' => $attrs['dotsOpacity'],
					    ],
					    '.slick-dots li button' => [
					        'background-color' => $attrs['dotsColor'],
					    ],
					];
			
					self::add_styles( array(
						'attrs' => $attrs,
						'css' => $desktop_css,
					));
					$dots = ( $attrs[ 'enableDots' ]  && $this->count > 1 )? 'true' : 'false';
					ob_start();
					?>

					var slider = {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						speed: <?php echo esc_attr( $attrs[ 'speed' ] ) ?>,
						fade: <?php echo $attrs[ 'fade' ] ? 'true' : 'false' ?>,
						autoplay: <?php echo $attrs[ 'autoplay' ] ? 'true' : 'false' ?>,
						arrows: <?php echo $attrs[ 'enableArrow' ] ? 'true' : 'false' ?>,
						dots: <?php echo esc_attr($dots) ?>,
						prevArrow: '<button type="button" class="gutentools-prev-arrow gutentools-slider-arrow"><i class="fa fa-angle-left"></i></button>',
						nextArrow: '<button type="button" class="gutentools-next-arrow gutentools-slider-arrow"><i class="fa fa-angle-right"></i></button>'
					};
					jQuery('#<?php echo esc_attr( $this->block_id ); ?> .gutentools-page-slider-init').slick( slider );

					<?php
					$js = ob_get_clean();
					self::add_scripts( $js );
		    	}
			}
	    	
	    }

	    public function get_query( $data ){

	    	$ids = [];
            if ( $data ) {
	            foreach ( $data as $obj ) {
	                if ( isset( $obj->id )) {
	                    $ids[] = absint( $obj->id );
	                }
	            }
            }
            
			$args = array(
				'post_type'   	 => 'page',
				'post_status' 	 => 'publish',
				'posts_per_page' => 3,
				'post__in' 		 => $ids,
				'orderby'        => 'post__in'
			);
			
			$query = new WP_Query( $args );

			return $query;
		}

		public function render( $attrs, $content, $block ) {
			$this->attrs = $attrs;
			
			$data = isset( $this->attrs[ 'page_id' ] ) ? json_decode( $this->attrs[ 'page_id' ] ) : false;

			if ( !$data ) {
                return false;
            }
			
			$query 	= $this->get_query( $data );
			$this->count = $query->post_count;
			
			ob_start();
		    
		    ?>
		    <div id=<?php echo esc_attr( $attrs[ 'block_id' ] ) ?> class="gutentools-page-slider wp-block-gutentools-slider ">
		    	<div class="gutentools-page-slider-init">
					<?php $this->slider_template( $query, $data ) ?>
				</div>
			</div>
		    <?php
		    return ob_get_clean();
		}

		
		public function slider_template( $query, $data ) {
		    $index = 0;
		    
		    if ( $query->have_posts() || !empty($data) ) :
		        $posts = $query->have_posts() ? $query->posts : $data; 
		        foreach( $posts as $page ):
		            $is_wp_post = isset( $page->ID ); 

		            $id = $is_wp_post ? $page->ID : 'static-' . $index;
		            $attachment_id = $is_wp_post ? get_post_thumbnail_id( $id ) : get_option( 'gutentools_image_id' );

		            if ( null == $attachment_id ) {
		                $attachment_id = get_option( 'gutentools_image_id' );
		            }

		            $link = $is_wp_post ? get_the_permalink( $id ) : '#'; 
		            
		            $desc = $is_wp_post ? get_the_excerpt( $id ) : ( isset( $data[$index]->description ) ? $data[$index]->description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at nulla quam. Praesent commodo ipsum sit amet nunc volutpat, at vehicula turpis venenatis. Sed eget sem nec erat laoreet dictum. In purus velit, consequat suscipit pellentesque ut, venenatis in dui. In iaculis iaculis sapien porta sagittis.' );

		            $custom_link = isset( $data[$index]->link ) ? $data[$index]->link : '';

		            ?>
		            <div class="gutentools-page-slider-wrapper" data-id="<?php echo esc_attr( $id ); ?>">
		                <?php 
		                    echo wp_get_attachment_image( $attachment_id, 'full', false, [
		                        'alt' => get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ), 
		                        'class' => 'gutentools-page-slider-image',
		                    ] );
		                ?>
		                <div class="gutentools-page-slider-overlay"></div>
		                <div class="gutentools-align-<?php echo esc_attr( $this->attrs['alignment'] ); ?> gutentools-page-slider-content is-content-justification-<?php echo esc_attr( $this->attrs['contentPosition'] ); ?>">
		                    <div class="gutentools-page-slider-content-inner">
		                        <h2 class="gutentools-page-title">
		                            <?php echo esc_html( $is_wp_post ? $page->post_title : 'Guten Tools' ); ?>
		                        </h2>

		                        <?php if ( isset( $this->attrs['useShortDesc'] ) && $this->attrs['useShortDesc'] ) : ?>
		                            <p class="gutentools-page-excerpt"><?php echo esc_html( $desc ); ?></p>
		                        <?php endif; ?>

		                        <div class="gutentools-slider-btn-wrapper">
		                            <a class="gutentools-slider-btn" href="<?php echo esc_url( $link ); ?>">
		                                <?php echo esc_html( ucfirst( $this->attrs['readMoreText'] ) ); ?>
		                            </a>
		                            
		                            <?php if ( isset( $this->attrs['useExternalLink'] ) && $this->attrs['useExternalLink'] ) : ?>
		                                <a class="gutentools-slider-custom-btn" href="<?php echo esc_url( $custom_link ); ?>">
		                                    <?php echo esc_html( ucfirst( $this->attrs['customLinkText'] ) ); ?>
		                                </a>
		                            <?php endif; ?>
		                        </div>
		                    </div>
		                </div>			            
		            </div>
		            <?php 
		            $index++;
		        endforeach;
		    endif;
		}


	}

	Gutentools_Page_Slider::get_instance();
}