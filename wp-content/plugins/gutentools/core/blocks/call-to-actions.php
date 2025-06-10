<?php 
if( !class_exists( 'Gutentools_Call_To_Actions' ) ){

	class Gutentools_Call_To_Actions extends Gutentools_Block{

		public $slug = 'call-to-actions';

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
					    'ctaPadding'             => 'padding', 
					    'headingTextPadding'     => 'padding', 
					    'subHeadingTextPadding'  => 'padding', 
					    'ctaMargin'              => 'margin',
						'headingTextMargin'      => 'margin',
						'subHeadingTextMargin'   => 'margin',
					];

					$typography_properties = [
						'headingTextTypo', 
						'subHeadingTextTypo'
					];

					$dimensions = self::extract_properties( 'dimension', $attrs, $dimension_properties );
					$typographies = self::extract_properties( 'typography', $attrs, $typography_properties );
					extract($dimensions);											
					extract($typographies);											
		    			    			    	    		    			    			    	    		    	
			    	foreach( self::$devices as $device ){

						$devices_style = [
							'.gutentools-cta-wrapper' => array_merge(
								$ctaPadding[ $device ],
								$ctaMargin[ $device ],
							),
							'.cta-title-description .gutentools-cta-heading' => array_merge(
								$headingTextPadding[ $device ],
								$headingTextMargin[ $device ],
								$headingTextTypo[ $device ],
							),
							
							'.cta-title-description .gutentools-cta-subheading' => array_merge(
								$subHeadingTextPadding[ $device ],
								$subHeadingTextMargin[ $device ],
								$subHeadingTextTypo[ $device ],
							),
						];			

						self::add_styles([
							'attrs' => $attrs,
							'css'   => $devices_style,
						], $device );
					}

					$desktop_css = [
					 
					    // '.gutentools-cta-overlay' => [
						// 	'background' => $attrs['bgOverlay'],
					    // ],	
						
						'.cta-title-description .gutentools-cta-heading' => [
					        'color' => $attrs['headingTextColor'],
					    ],	

						'.cta-title-description .gutentools-cta-subheading' => [
					        'color' => $attrs['subHeadingTextColor'],
					    ],	
					    
					];
			
					self::add_styles( array(
						'attrs' => $attrs,
						'css' => $desktop_css,
					));

					$css = [];
					$bg_attachment = $attrs[ 'bgAttachment' ] ? "fixed" : "scroll";
					if( ( !isset( $attrs[ 'bgType' ] ) || 'image' == $attrs[ 'bgType' ] ) && isset( $attrs[ 'bgImage' ] )  && is_array( $attrs[ 'bgImage' ] ) && $attrs[ 'bgImage' ][ 'url'  ] != '' ){
						$css= [
							''    => [
								'background-image' => 'url(' .$attrs[ 'bgImage' ][ 'url' ] . ')',
								'background-attachment' => $bg_attachment,
								'background-position' =>isset( $attrs[ 'bgPosition' ] ) ? $attrs[ 'bgPosition' ] : 'center center',
								'background-repeat' =>$attrs[ 'bgRepeat' ],
								'background-size' =>$attrs[ 'bgSize' ],
							]
						];

						if( isset( $attrs[ 'bgOverlay' ] ) ){
							 $css[ '.gutentools-cta-overlay' ] = [
						        'background-color' => $attrs[ 'bgOverlay' ]
						    ];
						}

					}elseif( 'color' == $attrs[ 'bgType' ] ) {
						$css[' '] = [
						    'background-color' => $attrs[ 'bgColor' ],
						];
					}elseif( 'gradient' == $attrs[ 'bgType' ] ) {
						$css[' '] = [
						    'background' => $attrs[ 'bgGradient' ],
						];
					}				
					
					$borders = $attrs[ 'borders' ] ?? null;
					$css[ '' ] = array_merge(
					    $css[ '' ] ?? [],
					    [
					    	'border' => $borders,
							'overflow' => 'hidden',
					        'border-radius' => isset( $attrs[ 'borderRadius' ] ) ? $attrs[ 'borderRadius' ] . 'px' : '0px'
					    ]
					);
					
					self::add_styles( [
						'attrs' => $attrs,
						'css' => $css
					]);
					

					ob_start();
					
		    	}
			}
	    	
	    	
	    }

		public function render( $attrs, $content, $block ) {			
			$this->attrs = $attrs;
		
			ob_start();
		    
		    ?>
		    <div  id=<?php echo esc_attr( $attrs[ 'block_id' ] ) ?> class="gutentools-cta-block" >
				<div class=" gutentools-align-<?php echo esc_attr( $this->attrs[ 'alignment' ] ) ?> gutentools-<?php echo esc_attr( $this->attrs[ 'layoutStyle' ] ) ?>  gutentools-cta-wrapper" >
					<div class="gutentools-cta-overlay" ></div>
					<div class= gutentools-cta-content >
						<div class="cta-title-description">
							<?php if ( isset( $this->attrs[ 'showHeadingText' ]) && $this->attrs[ 'showHeadingText' ] ) : ?>	
								<<?php echo 'h' . esc_html( $this->attrs[ 'headingTag' ]); ?> class="gutentools-cta-heading" ><?php echo esc_html( ucfirst( $this->attrs[ 'headingText' ])) ?></<?php echo 'h' . esc_html( $this->attrs[ 'headingTag' ]); ?>>
							<?php endif; ?>
							<?php if ( isset( $this->attrs[ 'showSubHeadingText' ]) && $this->attrs[ 'showSubHeadingText' ] ) : ?>	
								<p class="gutentools-cta-subheading" ><?php echo esc_html( ucfirst( $this->attrs[ 'subHeadingText' ])) ?></p> 
							<?php endif; ?>
						</div>
						<?php if ( isset( $this->attrs[ 'showButton' ]) && $this->attrs[ 'showButton' ] ) : ?>
							<div class="cta-buttons">
								<?php self::wp_kses_extended( $content ); ?>
							</div>
						<?php endif; ?>
					</div>
				</div>				
		    </div>
		    <?php
		    return ob_get_clean();
		}

	}

	Gutentools_Call_To_Actions::get_instance();
}