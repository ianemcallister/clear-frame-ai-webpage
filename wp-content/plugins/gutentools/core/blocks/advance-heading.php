<?php 
if( !class_exists( 'Gutentools_Advance_Heading' ) ){

	class Gutentools_Advance_Heading extends Gutentools_Block{

		public $slug = 'advance-heading';

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
					    'headingPadding'    => 'padding', 
					    'prefixPadding'     => 'padding', 
					    'suffixPadding'     => 'padding', 
					    'headingMargin'     => 'margin',
						'prefixMargin'      => 'margin',
						'suffixMargin'      => 'margin',
						'prefixRadius'      => 'border-radius', 
					];

					$typography_properties = [
						'headingTypo', 
						'prefixTypo', 
						'suffixTypo'
					];

					$dimensions = self::extract_properties( 'dimension', $attrs, $dimension_properties );
					$typographies = self::extract_properties( 'typography', $attrs, $typography_properties );
					extract($dimensions);											
					extract($typographies);											
		    			    			    	    		    			    			    	    		    	
			    	foreach( self::$devices as $device ){

						$devices_style = [
							'.gutentools-advance-heading-wrapper .gutentools-advance-heading' => array_merge(
								$headingPadding[ $device ],
								$headingMargin[ $device ],
								$headingTypo[ $device ],
							),
							'.gutentools-advance-heading-wrapper .gutentools-advance-heading-prefix' => array_merge(
								$prefixPadding[ $device ],
								$prefixMargin[ $device ],
								$prefixTypo[ $device ],
								$prefixRadius[ $device ],
							),
							
							'.gutentools-advance-heading-wrapper .gutentools-advance-heading-suffix' => array_merge(
								$suffixPadding[ $device ],
								$suffixMargin[ $device ],
								$suffixTypo[ $device ],
							),
						];			

						self::add_styles([
							'attrs' => $attrs,
							'css'   => $devices_style,
						], $device );
					}

					$desktop_css = [
					 
					    '.gutentools-advance-heading-wrapper .gutentools-advance-heading' => [
					        'color' => $attrs['headingColor'],
							'background' => $attrs['headingBgColor'],
					    ],	
						
						'.gutentools-advance-heading-wrapper .gutentools-advance-heading-prefix' => [
					        'color' => $attrs['prefixColor'],
							'background' => $attrs['prefixBgColor'],
					    ],	

						'.gutentools-advance-heading-wrapper .gutentools-advance-heading-suffix' => [
					        'color' => $attrs['suffixColor'],
							'background' => $attrs['suffixBgColor'],
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
		    	<div class="gutentools-align-<?php echo esc_attr( $this->attrs[ 'alignment' ] ) ?> gutentools-advance-heading-wrapper">
					<?php if ( isset( $this->attrs[ 'showPrefix' ]) && $this->attrs[ 'showPrefix' ] ) : ?>
						<span class="gutentools-advance-heading-prefix" ><?php echo esc_html( ucfirst( $this->attrs[ 'prefixText' ] )) ?></span>
					<?php endif; ?>
					<<?php echo 'h' . esc_html( $this->attrs[ 'headingTag' ]); ?> class="gutentools-advance-heading" ><?php echo esc_html( ucfirst( $this->attrs[ 'headingText' ])) ?></<?php echo 'h' . esc_html( $this->attrs[ 'headingTag' ]); ?>>
					<?php if ( isset( $this->attrs[ 'showSuffix' ]) && $this->attrs[ 'showSuffix' ] ) : ?>
						<p class="gutentools-advance-heading-suffix" ><?php echo esc_html( ucfirst( $this->attrs[ 'suffixText' ] )) ?></p>
					<?php endif; ?>
				</div>
		    </div>
		    <?php
		    return ob_get_clean();
		}

	}

	Gutentools_Advance_Heading::get_instance();
}