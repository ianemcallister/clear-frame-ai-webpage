<?php 
if( !class_exists( 'Gutentools_Count_Up' ) ){

	class Gutentools_Count_Up extends Gutentools_Block{

		public $slug = 'count-up';

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
					    'countUpPadding'            => 'padding', 
					    'countUpNumberPadding'     => 'padding', 
					    'headingTextPadding'       => 'padding', 
						'subHeadingTextPadding'    => 'padding', 

					    'countUpMargin'          => 'margin',
						'countUpNumberMargin'    => 'margin',
						'headingTextMargin'      => 'margin',
						'subHeadingTextMargin'   => 'margin',
						'iconRadius'             => 'border-radius',
						'iconSize'               => 'size',
						'iconFontSize'           => 'font-size',
					];

					$typography_properties = [
						'countUpNumberTypo',
						'headingTextTypo', 
						'subHeadingTextTypo'
					];

					$dimensions = self::extract_properties( 'dimension', $attrs, $dimension_properties );
					$typographies = self::extract_properties( 'typography', $attrs, $typography_properties );
					extract($dimensions);											
					extract($typographies);											
		    			    			    	    		    			    			    	    		    	
			    	foreach( self::$devices as $device ){

						$devices_style = [

							'.gutentools-count-up-wrapper' => array_merge(
								$countUpPadding[ $device ],
								$countUpMargin[ $device ],
							),

							'.gutentools-count-up-wrapper .count-up-icon' => array_merge(								
								$iconRadius[ $device ],
								$iconSize[ $device ],
								$iconFontSize[$device],
							),

							'.gutentools-count-up-wrapper .count-up-number' => array_merge(
								$countUpNumberPadding[ $device ],
								$countUpNumberMargin[ $device ],
								$countUpNumberTypo[ $device ],
							),

							'.gutentools-count-up-wrapper .gutentools-count-up-title' => array_merge(
								$headingTextPadding[ $device ],
								$headingTextMargin[ $device ],
								$headingTextTypo[ $device ],
							),
							
							'.gutentools-count-up-wrapper .gutentools-count-up-subheading' => array_merge(
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
						'.gutentools-count-up-wrapper' => [
					        'background-color' => $attrs['bgColor'],
					    ],	

						'.gutentools-count-up-wrapper .count-up-icon' => [
							'color' => $attrs['iconColor'],
							'background' => $attrs['iconBgColor'],
						],	


						'.gutentools-count-up-wrapper .count-up-number' => [
					        'color' => $attrs['countUpNumberColor'],
					    ],	

						'.gutentools-count-up-wrapper .gutentools-count-up-title' => [
					        'color' => $attrs['headingTextColor'],
					    ],	

						'.gutentools-count-up-wrapper .gutentools-count-up-subheading' => [
					        'color' => $attrs['subHeadingTextColor'],
					    ],	
					];

					$iconBorder = $attrs[ 'iconBorder' ] ?? null;					
					$desktop_css[ '.gutentools-count-up-wrapper .count-up-icon' ] = array_merge(
					    $desktop_css[ '.gutentools-count-up-wrapper .count-up-icon' ] ?? [],
					    [
					    	'border' => $iconBorder,
					    ]
					);
			
					self::add_styles( array(
						'attrs' => $attrs,
						'css' => $desktop_css,
					));				
					
					ob_start();
					?>

					jQuery('.count-up-number .count').countUp({
					  'time': 2000,
					  'delay': 10
					});

					<?php
					$js = ob_get_clean();
					self::add_scripts( $js );
					
		    	}
			}
	    	
	    	
	    }

		public function render( $attrs, $content, $block ) {			
			$this->attrs = $attrs;
		
			ob_start();
		    
		    ?>
		    <div  id=<?php echo esc_attr( $attrs[ 'block_id' ] ) ?> class="gutentools-count-up-block" >
				<div class="gutentools-count-up-wrapper gutentools-count-up-content">
					<div class="gutentools-align-<?php echo esc_attr( $this->attrs[ 'alignment' ] ) ?> gutentools-<?php echo esc_attr( $this->attrs[ 'layoutStyle' ] ) ?>" >
						<?php if ( isset( $this->attrs[ 'showIcon' ]) && $this->attrs[ 'showIcon' ] ) : ?>	
							<div class="count-up-icon">
							<?php if ( isset( $this->attrs[ 'isImgIcon' ]) && $this->attrs[ 'isImgIcon' ] ) : 
										$src =( isset( $this->attrs[ 'iconImg' ] ) && $this->attrs[ 'iconImg' ][ 'url' ] ) ? $this->attrs[ 'iconImg' ][ 'url' ] : '' ;
										$attachment_id = attachment_url_to_postid( $src );
										if ( null == $attachment_id ) {
											$attachment_id = get_option( 'gutentools_image_id' );
										}
										echo wp_get_attachment_image( $attachment_id, 'full', false, [
											'alt' => get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ), 
										] );
										else: 
									?>
									<i class="fa <?php echo esc_attr( $this->attrs[ 'icon' ][ 'icon' ] ) ;  ?>"></i>
								<?php endif; ?>
							</div>
						<?php endif; ?>
						<div class="count-up-title-description">
							<?php if ( isset( $this->attrs[ 'showCountUpNumber' ]) && $this->attrs[ 'showCountUpNumber' ] ) : ?>
								<p class="count-up-number"><span><?php echo esc_html( ucfirst( $this->attrs[ 'prefixText' ])) ?></span><span class="count"><?php echo esc_html( number_format( $this->attrs[ 'countUpNumber' ])) ?></span><span><?php echo esc_html( ucfirst( $this->attrs[ 'suffixText' ])) ?></span></p>
							<?php endif; ?>
							<?php if ( isset( $this->attrs[ 'showHeadingText' ]) && $this->attrs[ 'showHeadingText' ] ) : ?>
								<<?php echo 'h' . esc_html( $this->attrs[ 'headingTag' ]); ?> class="gutentools-count-up-title" ><?php echo esc_html( ucfirst( $this->attrs[ 'headingText' ])) ?></<?php echo 'h' . esc_html( $this->attrs[ 'headingTag' ]); ?>>
							<?php endif; ?>
							<?php if ( isset( $this->attrs[ 'showSubHeadingText' ]) && $this->attrs[ 'showSubHeadingText' ] ) : ?>
								<p class="gutentools-count-up-subheading" ><?php echo esc_html( ucfirst( $this->attrs[ 'subHeadingText' ])) ?></p>
							<?php endif; ?>
						</div>
					</div>
				</div>						
		    </div>
		    <?php
		    return ob_get_clean();
		}

	}

	Gutentools_Count_Up::get_instance();
}