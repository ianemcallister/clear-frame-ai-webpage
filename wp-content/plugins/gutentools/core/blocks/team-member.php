<?php 
if( !class_exists( 'Gutentools_Team_Member' ) ){

	class Gutentools_Team_Member extends Gutentools_Block{

		public $slug = 'team-member';

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
					   	'teamBoxPadding'     => 'padding', 
					    'teamBoxMargin'      => 'margin', 					    
						'teamBoxRadius'      => 'border-radius',
						'imageBorderRadius'      => 'border-radius',
						'imageSize'          => 'size',
						'imagePadding'     => 'padding', 
					    'imageMargin'      => 'margin', 	
						'teamNamePadding'    	 => 'padding', 
					    'teamNameMargin'        => 'margin', 	
						'positionPadding'    => 'padding', 
					    'positionMargin'     => 'margin', 
						'descriptionPadding'    => 'padding', 
					    'descriptionMargin'     => 'margin', 
						
					];

					$typography_properties = [
						'teamNameTypo', 
						'positionTypo',
						'descriptionTypo', 
					];

					$dimensions = self::extract_properties( 'dimension', $attrs, $dimension_properties );
					$typographies = self::extract_properties( 'typography', $attrs, $typography_properties );
					extract($dimensions);											
					extract($typographies);											
		    			    			    	    		    			    			    	    		    	
			    	foreach( self::$devices as $device ){

						$devices_style = [
							
							'.gutentools-team-member-wrapper' => array_merge(
								$teamBoxPadding[ $device ],
								$teamBoxMargin[ $device ],
								$teamBoxRadius[ $device ],
							),
							'.gutentools-team-member-image img' => array_merge(
								$imagePadding[ $device ],
								$imageMargin[ $device ],
								$imageBorderRadius[ $device ],
								$imageSize[ $device ],
							),

							'.gutentools-team-member-name' => array_merge(
								$teamNamePadding[ $device ],
								$teamNameMargin[ $device ],
								$teamNameTypo[ $device ],
							),
							'.gutentools-team-member-position' => array_merge(
								$positionPadding[ $device ],
								$positionMargin[ $device ],
								$positionTypo[ $device ],
							),
							'.gutentools-team-member-description' => array_merge(
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
					    '.gutentools-team-member-wrapper' => [
							'background' => $attrs['teamBoxBackground'],
						],	
						'.gutentools-team-member-name' => [
							'color' => $attrs['teamNameColor'],
						],	
						'.gutentools-team-member-position' => [
							'color' => $attrs['positionColor'],
						],	
						'.gutentools-team-member-description' => [
							'color' => $attrs['descriptionColor'],
						],	
					];

					$teamBoxBorder = $attrs[ 'teamBoxBorder' ] ?? null;
					$imageBorder = $attrs[ 'imageBorder' ] ?? null;
					$desktop_css[ '.gutentools-team-member-wrapper' ] = array_merge(
					    $desktop_css[ '.gutentools-team-member-wrapper' ] ?? [],
					    [
					    	'border' => $teamBoxBorder,
					    ]
					);
					$desktop_css[ '.gutentools-team-member-image img' ] = array_merge(
					    $desktop_css[ '.gutentools-team-member-image img' ] ?? [],
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
				<div class="gutentools-align-<?php echo esc_attr( $this->attrs[ 'alignment' ] ) ?> gutentools-team-member-wrapper">
					<div class="gutentools-team-member-image">
						<?php $src =( isset( $this->attrs[ 'teamImg' ] ) && $this->attrs[ 'teamImg' ][ 'url' ] ) ? $this->attrs[ 'teamImg' ][ 'url' ] : '' ;
							$attachment_id = attachment_url_to_postid( $src );
							if ( null == $attachment_id ) {
					            $attachment_id = get_option( 'gutentools_image_id' );
					        }
							echo wp_get_attachment_image( $attachment_id, 'full', false, [
						        'alt' => get_post_meta( $attachment_id, '_wp_attachment_image_alt', true ), 
						    ] );
						?>
					</div>
					<div class="team-member-title-description">
						<?php if ( isset( $this->attrs[ 'showTeamName' ]) && $this->attrs[ 'showTeamName' ] ) : ?>
							<<?php echo 'h' . esc_html( $this->attrs[ 'titleTag' ]); ?> class="gutentools-team-member-name" ><?php echo esc_html( ucfirst( $this->attrs[ 'teamName' ])) ?></<?php echo 'h' . esc_html( $this->attrs[ 'titleTag' ]); ?>>
						<?php endif; ?>
						<?php if ( isset( $this->attrs[ 'showPosition' ]) && $this->attrs[ 'showPosition' ] ) : ?>
							<p class="gutentools-team-member-position" ><?php echo esc_html( ucfirst( $this->attrs[ 'positionText' ])) ?></p>
						<?php endif; ?>
						<?php if ( isset( $this->attrs[ 'showDescription' ]) && $this->attrs[ 'showDescription' ] ) : ?>
							<p class="gutentools-team-member-description" ><?php echo esc_html( ucfirst( $this->attrs[ 'descriptionText' ])) ?></p>
						<?php endif; 
						?>
						<?php if ($this->attrs[ 'showSocialLink' ] ): ?>
							<?php self::wp_kses_extended( $content ); ?>
						<?php endif; ?>
					</div>

				</div>				
		    </div>
		    <?php
		    return ob_get_clean();
		}

	}

	Gutentools_Team_Member::get_instance();
}