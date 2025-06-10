<?php 
if( !class_exists( 'Gutentools_Progress_Bar' ) ){

	class Gutentools_Progress_Bar extends Gutentools_Block{

		public $slug = 'progress-bar';

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
					    'progressBarPadding'     => 'padding', 
					    'progressBarMargin'     => 'margin',						
					];

					$typography_properties = [
						'labelTypo'
					];


					$dimensions = self::extract_properties( 'dimension', $attrs, $dimension_properties );
					$typographies = self::extract_properties( 'typography', $attrs, $typography_properties );
					extract($dimensions);											
					extract($typographies);											
		    			    			    	    		    			    			    	    		    	
			    	foreach( self::$devices as $device ){

						$devices_style = [						

							'.gutentools-progress-bar-wrapper' => array_merge(
								$progressBarPadding[ $device ],
								$progressBarMargin[ $device ],
							),						

							'.gutentools-progress-bar-label' => array_merge(
								$labelTypo[ $device ],
							),
							
						];			

						self::add_styles([
							'attrs' => $attrs,
							'css'   => $devices_style,
						], $device );
					}

					$desktop_css = [

					 	'.gutentools-progress-bar' => [
					        'background' => $attrs['progressBarBgColor'],
							'height' => $attrs['progressBarHeight'].'px',
							'border-radius' => $attrs['progressBarRadius'].'px',
					    ],	
						'.gutentools-progress-bar-completed' => [
					        'background' => $attrs['progressBarActiveBgColor'],			
							'width' => $attrs['completedPercentage'].'%',
							'color' => $attrs['completedPercentageColor'],
							'border-radius' => $attrs['progressBarRadius'].'px',
					    ],	

						'.gutentools-progress-bar-label' => [
					        'color' => $attrs['labelColor'],
					    ],	
					    				
					];
			
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
		    	<div class="gutentools-align-<?php echo esc_attr( $this->attrs[ 'labelAlignment' ] ) ?> gutentools-progress-bar-wrapper">
					<?php if ( isset( $this->attrs[ 'showLabel' ]) && $this->attrs[ 'showLabel' ] ) : ?>
						<?php $show_label = esc_attr( $this->attrs['showLabelInsideBar'] ) ? 'show-inside-bar' : ''; ?>
						<span class="gutentools-progress-bar-label <?php echo esc_attr( $show_label) ; ?>" ><?php echo esc_html( ucfirst( $this->attrs[ 'labelText' ] )) ?></span>
					<?php endif; ?>
					<div class="gutentools-progress-bar">
						<div class="gutentools-progress-bar-completed">
							<?php if ( isset( $this->attrs[ 'showCompletedPercentage' ]) && $this->attrs[ 'showCompletedPercentage' ] ) : ?>
								<?php echo esc_html( ucfirst( $this->attrs['completedPercentage'] ) ) . '%'; ?>
							<?php endif; ?>
						</div>
					</div>
				</div>
		    </div>
		    <?php
		    return ob_get_clean();
		}

	}

	Gutentools_Progress_Bar::get_instance();
}