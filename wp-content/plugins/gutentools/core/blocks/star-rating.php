<?php 
if( !class_exists( 'Gutentools_Star_Rating' ) ){

	class Gutentools_Star_Rating extends Gutentools_Block{

		public $slug = 'star-rating';

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
					    'ratingMargin'     => 'padding', 
					    'ratingPadding'     => 'margin',
						'iconSize'     => 'font-size',
						'borderRadius'      => 'border-radius', 
						
					];

					$typography_properties = [
						
					];

					$dimensions = self::extract_properties( 'dimension', $attrs, $dimension_properties );
					$typographies = self::extract_properties( 'typography', $attrs, $typography_properties );
					extract($dimensions);											
					extract($typographies);											
		    			    			    	    		    			    			    	    		    	
			    	foreach( self::$devices as $device ){

						$devices_style = [
							'.gutentools-star-rating' => array_merge(
								$ratingPadding[ $device ],
								$ratingMargin[ $device ],
								$iconSize[$device],
								$borderRadius[$device],
							),		
							
						
						];			

						self::add_styles([
							'attrs' => $attrs,
							'css'   => $devices_style,
						], $device );
					}					

					$desktop_css = [							
					   '.gutentools-star-rating' => [
							'background' => $attrs['background'],
							'color' => $attrs['iconColor'],
						],	

					];

					$border = $attrs[ 'border' ] ?? null;
					$desktop_css[ '.gutentools-star-rating' ] = array_merge(
					    $desktop_css[ '.gutentools-star-rating' ] ?? [],
					    [
					    	'border' => $border,
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
				<?php 
					$rating = isset( $this->attrs['rating'] ) ? floatval( $this->attrs['rating'] ) : 0; 
					$full_stars = floor( $rating );
					$half_star = ($rating - $full_stars) >= 0.5 ? 1 : 0;
					$empty_stars = 5 - $full_stars - $half_star;				
				
				?>
				
				<div class="gutentools-align-<?php echo esc_attr( $this->attrs[ 'alignment' ] ) ?> gutentools-star-rating">
					<?php 					
						for ( $i = 0; $i < $full_stars; $i++ ) {
							echo '<i class="fa fa-star"></i>';
						}
						
						if ( $half_star ) {
							echo '<i class="fa-regular fa-star-half-stroke"></i>';
						}
						
						for ( $i = 0; $i < $empty_stars; $i++ ) {
							echo '<i class="fa-regular fa-star"></i>';
						}
					?>
				</div>				
		    </div>
		    <?php
		    return ob_get_clean();
		}

	}

	Gutentools_Star_Rating::get_instance();
}