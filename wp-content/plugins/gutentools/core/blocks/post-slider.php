<?php 
if( !class_exists( 'Gutentools_Post_Slider' ) ){

	class Gutentools_Post_Slider extends Gutentools_Block{

		public $slug = 'post-slider';

		/**
		* Title of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $title = '';
		public $count = 0 ;

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
					    'imgHeight'    	     => 'height', 
					    'arrowSize'          => 'size',
					    'arrowPositionRight' => 'right', 
					    'arrowPositionLeft'  => 'left', 
					    'arrowRadius'        => 'border-radius', 
					    'imgRadius'        	 => 'border-radius', 
					    'dotsRadius'         => 'border-radius', 
					    'dotsSize'           => 'size',
					    'arrowIconSize'      => 'font-size'
					];

					$typography_properties = [
						'titleTypo', 
						'excerptTypo', 
						'buttonTypo',
						'metaTypo'
					];

					$dimensions = self::extract_properties( 'dimension', $attrs, $dimension_properties );
					$typographies = self::extract_properties( 'typography', $attrs, $typography_properties );
					extract($dimensions);											
					extract($typographies);											
		    			    			    	    		    			    			    	    		    	
			    	foreach( self::$devices as $device ){


						$devices_style = [
							'.gutentools-post-slider-wrapper' => array_merge(
								$padding[ $device ]
							),
							'.gutentools-post-title' => array_merge(
								$titlePadding[ $device ],
								$titleTypo[ $device ],
							),
							'.meta-content a span' => array_merge(
								$metaTypo[ $device ],
							),
							'.gutentools-post-excerpt' => array_merge(
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
							),
							'.gutentools-post-slider-image' =>array_merge(
								$imgHeight[ $device ],
								$imgRadius[ $device ],
							)						];			

						self::add_styles([
							'attrs' => $attrs,
							'css'   => $devices_style,
						], $device );
					}

					$desktop_css = [
					    '.gutentools-post-slider-wrapper-inner' => [
					        'background-color' => $attrs['bgColor'],
					    ], 
					    '.gutentools-post-title a' => [
					        'color' => $attrs['titleColor'],
					    ],
					    '.gutentools-post-excerpt' => [
					        'color' => $attrs['excerptColor'],
					    ],
					    '.gutentools-slider-btn' => [
						    'color' => $attrs['buttonColor'],
						    'background-color' => $attrs['buttonBGColor'],
						],
					    '.gutentools-slider-btn:hover' => [
						    'color' => $attrs['buttonHoverColor'],
						    'background-color' => $attrs['buttonBGHoverColor'],
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
					    '.meta-content a span' => [
					    	'color' => $attrs['metaColor']
					    ]
					];
			
					self::add_styles( array(
						'attrs' => $attrs,
						'css' => $desktop_css,
					));

					if( !is_array( $attrs[ 'slideToShow' ] ) ){
						$slideToShow = [
							'values' => [
								'desktop' => $attrs[ 'slideToShow' ],
								'tablet'  => $attrs[ 'slideToShow' ],
								'mobile'  => $attrs[ 'slideToShow' ],
							]
						];
					}else{
						$slideToShow = $attrs[ 'slideToShow' ];	
					}

					$slide = $this->count > esc_attr( $slideToShow[ 'values' ][ 'desktop' ] ) ? esc_attr( $slideToShow[ 'values' ][ 'desktop' ] ) : $this->count;

					ob_start();
					$dots = ( $attrs[ 'enableDots' ]  && $this->count > $slide )? 'true' : 'false';	

					?>

					var slider = {
						slidesToShow: <?php echo esc_attr( $slide ) ?>,
						slidesToScroll: 1,
						infinite: true,
						speed: <?php echo esc_attr( $attrs[ 'speed' ]) ?>,
						autoplay: <?php echo esc_attr( $attrs[ 'autoplay' ] ? 'true' : 'false') ?>,
						arrows: <?php echo esc_attr( $attrs[ 'enableArrow' ] ? 'true' : 'false' ) ?>,
						dots: <?php echo esc_attr( $dots ) ?>,
						prevArrow: '<button type="button" class="gutentools-prev-arrow gutentools-slider-arrow"><i class="fa fa-angle-left"></i></button>',
						nextArrow: '<button type="button" class="gutentools-next-arrow gutentools-slider-arrow"><i class="fa fa-angle-right"></i></button>',
						responsive: [
							{
								breakpoint: 767,
								settings: {
									slidesToShow: <?php echo esc_attr( $slideToShow[ 'values' ][ 'mobile' ] ); ?>
								}
							},
							{
								breakpoint: 1024,
								settings: {
									slidesToShow: <?php echo esc_attr( $slideToShow[ 'values' ][ 'tablet' ] ); ?>
								}
							}
							]
					};
					jQuery('#<?php echo esc_attr( $this->block_id ); ?> .gutentools-post-slider-init').slick( slider );

					<?php
					$js = ob_get_clean();
					self::add_scripts( $js );
		    	}
			}
	    	
	    }

	    public function get_query(){
	    	
			$args = array(
					'post_type'   => 'post',
					'post_status' => 'publish',
					'ignore_sticky_posts' => true,
					'posts_per_page' => $this->attrs[ 'postsToShow' ],
					'order' => $this->attrs[ 'order' ],
					'orderby' => $this->attrs[ 'orderBy' ],
					'tax_query' => array(),
				);

			if( isset( $this->attrs[ 'categories' ] ) && ! empty( $this->attrs[ 'categories' ] ) ){
					$args['tax_query'][] = array(
						'taxonomy' => 'category',
						'field'    => 'id',
						'terms'    => $this->attrs[ 'categories' ],
					);
				}
			
			$query = new WP_Query( $args );

			return $query;
		}

		public static function make_category_arr( $_cat ){
			$cat = false;
			if( $_cat ){
				$cat = array(
					'name' => $_cat->name,
					'link' => get_category_link( $_cat->term_id )
				);
			}

			return $cat;
		}

		public function render( $attrs, $content, $block ) {
			$this->attrs = $attrs;
			
			$query 	= $this->get_query( );
			
			$this->count = $query->post_count;
			
			ob_start();
		    
		    ?>
		    <div id=<?php echo esc_attr( $attrs[ 'block_id' ] ) ?> class="gutentools-post-slider wp-block-gutentools-slider ">
		    	<div class="gutentools-post-slider-init">
					<?php $this->slider_template( $query ) ?>
				</div>
			</div>
		    <?php
		    return ob_get_clean();
		}

		public function slider_template( $query ){

			$index = 0;
			if ( $query->have_posts() ) :
			    foreach( $query->posts as $post ):
					
					
			        $id  = $post->ID;
					$author_id = $post->post_author;

					$avatar      = get_avatar_url( $author_id );
					$author_link = get_author_posts_url( $author_id );

					if( isset( $this->attrs[ 'enableCategory' ] ) ){
						$_cat = get_the_category( $id );
						if( isset( $_cat[0] ) ){
							$_cat = array_slice($_cat, 0, 2);

					        $cat = array_map( function($category) {
					            return self::make_category_arr( $category );
					        }, $_cat );
						}else{
							$cat = array(
								'link' => '',
								'name' => ''
							);
						}
					}					
					
			        $attachment_id = get_post_thumbnail_id( $id );
			        if ( null == $attachment_id ) {
			            $attachment_id = get_option( 'gutentools_image_id' );
			        }
			        $link = get_the_permalink( $id );            
			        ?>

			        <div class="gutentools-post-slider-wrapper"  data-id=<?php echo esc_attr( $id ) ?>>
						<div class="gutentools-post-slider-wrapper-inner">
							<?php if( $this->attrs[ 'enableImage' ] ): ?>
								<a href="<?php echo esc_url( $link ) ?>">
									<?php 
										 echo wp_get_attachment_image( $attachment_id, 'full', false, [
									        'alt' => get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ), 
									        'class' => 'gutentools-post-slider-image',
									    ] );
									?>
								
								</a>
							<?php endif; ?>
							<div class="gutentools-align-<?php echo esc_attr( $this->attrs[ 'alignment' ] ) ?> gutentools-post-slider-content">
								<div class="gutentools-post-slider-content-inner">
									<?php if( $this->attrs[ 'enableAuthor' ] || $this->attrs[ 'enableDate' ] || $this->attrs[ 'enableCategory' ] ): ?>
				                        <div class="gutentools-post-meta-wrapper">
				                        	<?php if( $this->attrs[ 'enableAuthor' ] ): ?>
				                                <div class="gutentools-post-author meta-content">
				                                    <a href="<?php echo esc_url( $author_link ); ?>">
													    <img src="<?php echo esc_url( $avatar ); ?>" 
													         class="gutentools-post-author-img" 
													         alt="<?php echo esc_attr( get_the_author_meta( 'display_name', $author_id ) ); ?>" />
													    <span><?php echo esc_html( ucfirst( get_the_author_meta( 'display_name', $author_id ) ) ); ?></span>
													</a>
				                                </div>
				                        	<?php endif; ?>

				                        	<?php if( $this->attrs[ 'enableDate' ] ): ?>
				                                <div class="gutentools-post-date meta-content" >
				                                    <a href="#">
				                                        <span>
				                                        	<?php echo get_the_date( ); ?>
				                                    	</span>
				                                    </a>
				                                </div>
				                        	<?php endif; ?>

				                        	<?php if( isset( $cat ) && $this->attrs['enableCategory'] ): ?>
											    <div class="gutentools-post-cat meta-content">
											        <?php foreach( $cat as $category ): ?>
											            <a href="<?php echo esc_url( $category['link'] ); ?>" style="margin-right: 8px;">
											                <span><?php echo esc_html( $category['name'] ); ?></span>
											            </a>
											        <?php endforeach; ?>
											    </div>
											<?php endif; ?>

				                        </div>
				                    <?php endif; ?>				                   
									<h2 class="gutentools-post-title"> <a href="<?php echo esc_url( $link ) ?>"><?php echo esc_html( $post->post_title ); ?> </a></h2>
									<?php 
										$desc = !empty($post->post_excerpt) ? $post->post_excerpt : $post->post_content;
										if( $this->attrs[ 'enableExcerpt' ] ):
											?>
										<p class="gutentools-post-excerpt"><?php echo esc_html( wp_trim_words( $desc, $this->attrs[ 'excerptLength' ], '...' ) ) ; ?></p>
									<?php endif;
									if( $this->attrs[ 'enableButton' ] ): ?>
									<div class="gutentools-slider-btn-wrapper">
										<a class="gutentools-slider-btn" href="<?php echo esc_url( $link ) ?>"><?php echo esc_html( ucfirst( $this->attrs[ 'readMoreText' ])) ?></a>
									</div>
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

	Gutentools_Post_Slider::get_instance();
}