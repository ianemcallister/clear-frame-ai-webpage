<?php 
if( !class_exists( 'Gutentools_Container' ) ){

	class Gutentools_Container extends Gutentools_Block{

		public $slug = 'container';

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
					    'padding'      		=> 'padding', 
					    'margin'       		=> 'margin', 
					    'containerHeight'  	=> 'min-height', 
					];

					if(  $attrs[ "containerType" ] == 'boxed' ){
						$dimension_properties[ 'containerWidth' ] =  'max-width'; 
					}
					
					$dimensions = self::extract_properties( 'dimension', $attrs, $dimension_properties );						
					extract( $dimensions );											
		    			    			    	    		    			    			    	    		    	
			    	foreach( self::$devices as $device ){

			    		$height = $width = [];
						if(  $attrs[ "containerType" ] == 'boxed' ){
							$width =  $containerWidth[ $device ]; 
						}
						$height =  $containerHeight[ $device ]; 

						$devices_style = [
							'' => array_merge(
								$padding[ $device ],
								$margin[ $device ],
							),
							'.gutentools-container-content-wrapper' => array_merge(
								$width,
								$height
							)
						];			

						self::add_styles([
							'attrs' => $attrs,
							'css'   => $devices_style,
						], $device );
					}

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
							 $css[ '.gutentools-section-overlay' ] = [
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
					        'border-radius' => isset( $attrs[ 'borderRadius' ] ) ? $attrs[ 'borderRadius' ] . 'px' : '0px'
					    ]
					);
					
					self::add_styles( [
						'attrs' => $attrs,
						'css' => $css
					]);
					
		    	}
			}
	    	
	    }

	}

	Gutentools_Container::get_instance();
}