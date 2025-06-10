<?php 
if( !class_exists( 'Gutentools_Icon_Box' ) ){

	class Gutentools_Icon_Box extends Gutentools_Block{

		public $slug = 'icon-box';

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
					   	'iconBoxPadding'     => 'padding', 
					    'iconBoxMargin'      => 'margin', 					    
						'iconBoxRadius'      => 'border-radius',
						'titlePadding'    	 => 'padding', 
					    'titleMargin'        => 'margin', 	
						'descriptionPadding'    => 'padding', 
					    'descriptionMargin'     => 'margin', 	
						'iconRadius' => 'border-radius',
						'iconSize'          => 'size',
						'iconFontSize'     => 'font-size',
					];

					$typography_properties = [
						'titleTypo', 
						'descriptionTypo', 
					];

					$dimensions = self::extract_properties( 'dimension', $attrs, $dimension_properties );
					$typographies = self::extract_properties( 'typography', $attrs, $typography_properties );
					extract($dimensions);											
					extract($typographies);											
		    			    			    	    		    			    			    	    		    	
			    	foreach( self::$devices as $device ){

						$devices_style = [
							
							'.gutentools-icon-box-wrapper' => array_merge(
								$iconBoxPadding[ $device ],
								$iconBoxMargin[ $device ],
								$iconBoxRadius[ $device ],
							),

							'.gutentools-icon-box-icon' => array_merge(								
								$iconRadius[ $device ],
								$iconSize[ $device ],
								$iconFontSize[$device],
							),

							'.gutentools-icon-box-title' => array_merge(
								$titlePadding[ $device ],
								$titleMargin[ $device ],
								$titleTypo[ $device ],
							),

							'.gutentools-icon-box-description' => array_merge(
								$descriptionPadding[ $device ],
								$descriptionMargin[ $device ],
								$descriptionTypo[ $device ],
							),
						
						];			

						self::add_styles([
							'attrs' => $attrs,
							'css'   => $devices_style,
						], $device );
					}

					$desktop_css = [	
						'.gutentools-icon-box-wrapper' => [
							'background' => $attrs['iconBoxBgColor'],
						],	

					   '.gutentools-icon-box-icon' => [
							'color' => $attrs['iconColor'],
							'background' => $attrs['iconBgColor'],
						],	

						'.gutentools-icon-box-title' => [
							'color' => $attrs['titleColor'],
						],	
						'.gutentools-icon-box-description' => [
							'color' => $attrs['descriptionColor'],
						],	
					    
					];

					$iconBoxBorder = $attrs[ 'iconBoxBorder' ] ?? null;
					$iconBorder = $attrs[ 'iconBorder' ] ?? null;
					$desktop_css[ '.gutentools-icon-box-wrapper' ] = array_merge(
					    $desktop_css[ '.gutentools-icon-box-wrapper' ] ?? [],
					    [
					    	'border' => $iconBoxBorder,
					    ]
					);
					$desktop_css[ '.gutentools-icon-box-icon' ] = array_merge(
					    $desktop_css[ '.gutentools-icon-box-icon' ] ?? [],
					    [
					    	'border' => $iconBorder,
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
				<div class="gutentools-icon-box-wrapper">
					<div class="gutentools-align-<?php echo esc_attr( $this->attrs[ 'alignment' ] ) ?> gutentools-icon-box-content " >
						<div class="gutentools-icon-box-icon">
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
						<div class="icon-box-title-description">
							<?php if ( isset( $this->attrs[ 'showTitle' ]) && $this->attrs[ 'showTitle' ] ) : ?>
								<<?php echo 'h' . esc_html( $this->attrs[ 'titleTag' ]); ?> class="gutentools-icon-box-title" ><?php echo esc_html( ucfirst( $this->attrs[ 'titleText' ])) ?></<?php echo 'h' . esc_html( $this->attrs[ 'titleTag' ]); ?>>
							<?php endif; ?>
							<?php if ( isset( $this->attrs[ 'showDescription' ]) && $this->attrs[ 'showDescription' ] ) : ?>
								<p class="gutentools-icon-box-description" ><?php echo esc_html( ucfirst( $this->attrs[ 'descriptionText' ])) ?></p>
							<?php endif; ?>
						</div>
					</div>
				</div>				
		    </div>
		    <?php
		    return ob_get_clean();
		}

	}

	Gutentools_Icon_Box::get_instance();
}