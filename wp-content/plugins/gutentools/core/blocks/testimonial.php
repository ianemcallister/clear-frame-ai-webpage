<?php 
if( !class_exists( 'Gutentools_Testimonial' ) ){

	class Gutentools_Testimonial extends Gutentools_Block{

		public $slug = 'testimonial';

		/**
		* Title of this block.
		*
		* @access public
		* @since 1.0.0
		* @var string
		*/
		public $title = '';

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
						'boxPadding'           => 'padding', 
					    'boxMargin'            => 'margin', 					    
						'boxBorderRadius'      => 'border-radius',
						'imagePadding'         => 'padding',
						'imageMargin'          => 'margin',
						'imageBorderRadius'    => 'border-radius',
						'imageSize'            => 'size',
						'namePadding'          => 'padding',
						'nameMargin'           => 'margin',
						'positionPadding'      => 'padding',
						'positionMargin'       => 'margin',
						'testimonialTextPadding' => 'padding',
						'testimonialTextMargin' => 'margin',
						'quoteIconSize'         => 'font-size',
						
					];

					$typography_properties = [
						'nameTypo', 
						'positionTypo',
						'testimonialTextTypo', 
					];

					$dimensions = self::extract_properties( 'dimension', $attrs, $dimension_properties );
					$typographies = self::extract_properties( 'typography', $attrs, $typography_properties );
					extract($dimensions);											
					extract($typographies);											
		    			    			    	    		    			    			    	    		    	
			    	foreach( self::$devices as $device ){

						$devices_style = [

							'.gutentools-testimonial-wrapper' => array_merge(
								$boxPadding[ $device ],
								$boxMargin[ $device ],
								$boxBorderRadius[ $device ],
							),

							'.gutentools-testimonial-image img' => array_merge(
								$imagePadding[ $device ],
								$imageMargin[ $device ],
								$imageBorderRadius[ $device ],
								$imageSize[ $device ],
							),

							'.gutentools-testimonial-name' => array_merge(
								$namePadding[ $device ],
								$nameMargin[ $device ],
								$nameTypo[ $device ],
							),
							'.gutentools-testimonial-position' => array_merge(
								$positionPadding[ $device ],
								$positionMargin[ $device ],
								$positionTypo[ $device ],
							),
							'.gutentools-testimonial-text' => array_merge(
								$testimonialTextPadding[ $device ],
								$testimonialTextMargin[ $device ],
								$testimonialTextTypo[ $device ],
							),
							'.gutentools-testimonial-text-wrapper i' => array_merge(
								$quoteIconSize[ $device ],
							),
						];			

						self::add_styles([
							'attrs' => $attrs,
							'css'   => $devices_style,
						], $device );
					}

					$desktop_css = [							
					   '.gutentools-testimonial-wrapper' => [
							'background' => $attrs['boxBackgroundColor'],
						],	

						'.gutentools-testimonial-name' => [
							'color' => $attrs['nameColor'],
						],	

						'.gutentools-testimonial-position' => [
							'color' => $attrs['positionColor'],
						],

						'.gutentools-testimonial-text' => [
							'color' => $attrs['testimonialTextColor'],
						],

						'.gutentools-testimonial-text-wrapper i' => [
							'color' => $attrs['quoteIconColor'],
						],
					];	
					
					$boxBorder = $attrs[ 'boxBorder' ] ?? null;
					$desktop_css[ '.gutentools-testimonial-wrapper' ] = array_merge(
					    $desktop_css[ '.gutentools-testimonial-wrapper' ] ?? [],
					    [
					    	'border' => $boxBorder,
					    ]
					);

					$imageBorder = $attrs[ 'imageBorder' ] ?? null;
					$desktop_css[ '.gutentools-testimonial-image img' ] = array_merge(
					    $desktop_css[ '.gutentools-testimonial-image img' ] ?? [],
					    [
					    	'border' => $imageBorder,
					    ]
					);
			
					self::add_styles( array(
						'attrs' => $attrs,
						'css' => $desktop_css,
					));

					ob_start();
					
		    	}
			}
	    	
	    	
	    }

		public function render( $attrs, $content, $block ) {			
			$this->attrs = $attrs;
									
			ob_start();
		    ?>
		    <div  id=<?php echo esc_attr( $attrs[ 'block_id' ] ) ?> >
				<div class="gutentools-align-<?php echo esc_attr( $this->attrs[ 'alignment' ] ) ?> gutentools-testimonial-wrapper">	
					<?php if ( isset( $this->attrs[ 'showImage' ]) && $this->attrs[ 'showImage' ] ) : ?>				
						<div class="gutentools-testimonial-image">
							<?php $src =( isset( $this->attrs[ 'image' ] ) && $this->attrs[ 'image' ][ 'url' ] ) ? $this->attrs[ 'image' ][ 'url' ] : '' ;
								$attachment_id = attachment_url_to_postid( $src );
								if ( null == $attachment_id ) {
						            $attachment_id = get_option( 'gutentools_image_id' );
						        }
								echo wp_get_attachment_image( $attachment_id, 'full', false, [
							        'alt' => get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ), 
							    ] );
							?>
						</div>
					<?php endif; ?>
					<div class="gutentools-testimonial-content">
						<div class="gutentools-name-and-position">
							<?php if ( isset( $this->attrs[ 'showName' ]) && $this->attrs[ 'showName' ] ) : ?>	
								<h3 class="gutentools-testimonial-name"><?php echo esc_html( ucfirst( $this->attrs[ 'name' ])) ?></h3>
							<?php endif; ?>
							<?php if ( isset( $this->attrs[ 'showPosition' ]) && $this->attrs[ 'showPosition' ] ) : ?>	
								<p class="gutentools-testimonial-position"><?php echo esc_html( ucfirst( $this->attrs[ 'position' ])) ?></p>
							<?php endif; ?>
						</div>
					</div>
					<?php if ( isset( $this->attrs[ 'showRating' ]) && $this->attrs[ 'showRating' ] ) : ?>	
						<?php self::wp_kses_extended( $content ); ?>
					<?php endif; ?>
					<div class="gutentools-testimonial-text-wrapper">

						<?php if ( isset( $this->attrs[ 'showQuoteIcon' ]) && $this->attrs[ 'showQuoteIcon' ] ) : ?>	
							<i class="fa-solid fa-quote-left"></i>							
						<?php endif; ?>

						<?php if ( isset( $this->attrs[ 'showText' ]) && $this->attrs[ 'showText' ] ) : ?>	
							<p class="gutentools-testimonial-text"><?php echo esc_html( ucfirst( $this->attrs[ 'testimonialText' ])) ?></p>						
						<?php endif; ?>

						<?php if ( isset( $this->attrs[ 'showQuoteIcon' ]) && $this->attrs[ 'showQuoteIcon' ] ) : ?>	
							<i class="fa-solid fa-quote-right"></i>							
						<?php endif; ?>

					</div>
				</div>				
		    </div>
		    <?php
		    return ob_get_clean();
		}

	}

	Gutentools_Testimonial::get_instance();
}