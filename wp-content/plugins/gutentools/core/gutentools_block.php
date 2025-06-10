<?php 

class Gutentools_Block extends Gutentools_Helper{
	public static $styles=[];
	public static $scripts=[];
	public static $devices = [ 'desktop', 'tablet', 'mobile' ];
	public static $css;
	public $block_id;
	public static $counter = 1 ;
	public static $fse_content = '';

	public static $block_names = [];

	public static $all_blocks = [];

	/**
	* To store Array of this blocks
	*
	* @access protected
	* @since 1.0.0
	* @var array
	*/
	protected $blocks = []; 


	/**
	 * Add scripts to the array
	 *
	 * @static
	 * @access protected
	 * @since 1.0.0
	 * @return null
	 */
	protected static function add_scripts( $scripts ){
	    self::$scripts[] = $scripts;
	}

	public function __construct(){
		self::$block_names[] = 'gutentools/' . $this->slug;
		add_action( 'init', [ $this, 'register' ] );
		if ( self::$counter == 1 ) {
			add_action('wp_enqueue_scripts', [$this, 'generate_css'], 98);
			add_action('wp_enqueue_scripts', [$this, 'generate_scripts'], 99);

		}
		self::$counter++;
	}

	public function register(){

		$args = [];
		
		if( method_exists( $this, "render" ) ){
            $args[ "render_callback" ] = [ $this, "render" ];
        }        

        add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
		register_block_type( Gutentools_Path . "/build/blocks/" . $this->slug, $args );
		$script_handle = generate_block_asset_handle( 'gutentools/'.$this->slug, 'editorScript' );
    	wp_set_script_translations( $script_handle, 'gutentools');

	}

	public function enqueue_scripts(){
		if( method_exists( $this, 'process_script' ) ){
			$this->get_blocks();
			$this->process_script();
		}
	}

	/**
	 * Add styes to the array
	 *
	 * @static
	 * @access protected
	 * @since 1.0.0
	 * @return null
	 */
	protected static function add_styles( $style, $device = 'desktop' ){
	    self::$styles[ $device ][] = $style;
	}

	public function generate_css() {
	    $styles = apply_filters('gutentools/styles', self::$styles);
	    $css = '';

	    foreach ($styles as $device => $style) {
	        $css .= $this->process_css($style, $device);
	    }

	    if (!empty($css)) {
	        wp_register_style(
	        	'gutentools-inline-styles', 
	        	false,
	        	[],
	        	gutentools_get_version()
	        );
	        wp_enqueue_style('gutentools-inline-styles');
	        wp_add_inline_style('gutentools-inline-styles', wp_strip_all_tags( $css ));
	    }
	}

	public function generate_scripts() {
	    $scripts = apply_filters('gutentools/scripts', self::$scripts);
	    $js = '';

	    foreach ($scripts as $script) {
	        $js .= $script;

	    }
	    if (!empty($js)) {
	    	$js = 'jQuery(document).ready(function(){' . $js . '});';
	    	$escaped_js_code = esc_js( str_replace( "\n", '', $js ) );
	        wp_register_script(
	            'gutentools-inline-scripts', 
	             Gutentools_Url.'/assets/scripts/empty.js',
	            [], 
	            gutentools_get_version(), 
	            true 
	        );

	        wp_enqueue_script('gutentools-inline-scripts');
	        wp_add_inline_script('gutentools-inline-scripts', self::fix_escaped_tags_in_js($escaped_js_code));
	    }
	}


	/**
	 * Returns array of the specific blocks from the content
	 *
	 * @access public
	 * @since 1.0.0
	 * @return array
	 */
	public function get_blocks(){

	    if( count( self::$all_blocks ) == 0 ){
	        self::set_blocks();
	    }

	    foreach( self::$all_blocks as $block ){
	        if( 'gutentools/' . $this->slug == $block[ 'blockName' ] ){
	            $this->blocks[] = $block;
	        }
	    }

	    return $this->blocks;
	}

	public static function set_fse_content(){

	    $query = new WP_Query([
	        'post_type' => [ 'wp_block ', 'wp_template', 'wp_template_part' ],
	        'posts_per_page' => -1,
	    ]);

	    if( $query->have_posts() ) {
	        while( $query->have_posts() ){
	            $query->the_post();
	            $id = get_the_ID();
	            self::$fse_content .= get_post_field( 'post_content', $id );
	        }
	    }

	    wp_reset_postdata();

	    $widget_blocks = get_option( 'widget_block' );

	    if( is_array( $widget_blocks ) ){
	        foreach( $widget_blocks as $wb ){
	            if( is_array( $wb ) && isset( $wb[ 'content' ] ) ){
	                self::$fse_content .= $wb[ 'content' ];
	            }
	        }
	    }
	}

	/**
	 * Set array of the specific blocks from the content in blocks variable
	 *
	 * @access protected
	 * @since 1.0.0
	 * @return array
	 */
	public static function set_blocks( $blocks = false ){

	    if( !$blocks ){

	        $id = get_the_ID();
	        $content = get_post_field( 'post_content', $id );

	        if( empty( self::$fse_content ) ){
	            self::set_fse_content();
	            $content .= self::$fse_content;
	        }

	        // Add support for patterns
	        if( class_exists( 'WP_Block_Patterns_Registry' ) ){
	            $patterns = WP_Block_Patterns_Registry::get_instance()->get_all_registered();
	            foreach( $patterns as $pattern ){
	                $content .= $pattern[ 'content' ];
	            }
	        }

	        $blocks = parse_blocks( $content );
	    }

	    if( $blocks && count( $blocks ) > 0 ){
	        foreach( $blocks as $block ){

	            if( in_array( $block[ 'blockName' ], self::$block_names ) ){
	                self::$all_blocks[] = $block;
	            }

	            if( isset( $block[ 'innerBlocks' ] ) && count( $block[ 'innerBlocks' ] ) > 0 ){
	                self::set_blocks( $block[ 'innerBlocks' ] );
	            }
	        }
	    }
	}

	public function get_attrs(){

		$attr = file_get_contents( Gutentools_Path . '/build/blocks/' . $this->slug .'/block.json' ); // phpcs:ignore
		$attr = json_decode( $attr, true );
		
		return $attr[ 'attributes' ];
	}

	/**
	 * merge attribute array with default values
	 *
	 * @access public
	 * @since 1.0.0
	 * @return array
	 */
	public function get_attrs_with_default( $attrs ){
		if ( !empty( $attrs) ) {
			
			$this->block_id = $attrs[ 'block_id' ];

		    $return = $def =  [];
		    if( method_exists( $this, 'get_attrs' ) ){
		        $def = $this->get_attrs();
		    } else {
		        return $attrs;
		    }

		    foreach( $def as $key => $val ){
		        if( isset( $attrs[ $key ] ) ){
		            $return[ $key ] = $attrs[ $key ];
		        } else {
		            if( isset( $def[ $key ][ 'default' ] ) ){
		                $return[ $key ] = $def[ $key ][ 'default' ];
		            } else {
		                $return[ $key ] = false;
		            }
		        }
		    }

	    	return $return;
		}
	}

	/**
	 * get compatible array from the value of dimension control
	 *
	 * @access public
	 * @since 1.0.0
	 * @return array
	 */
	public static function get_dimension_values( $props, $attr ){
		
	    if( !is_array( $props ) ){
	        switch( $props ){
	            case 'margin':
		            $props = [
		                'margin-top',
		                'margin-right',
		                'margin-bottom',
		                'margin-left'
		            ];
	            break;
	            case 'padding':
		            $props = [
		                'padding-top',
		                'padding-right',
		                'padding-bottom',
		                'padding-left'
		            ];
	            break;

	            case 'border-radius':
		            $props = [ 'border-radius' ];
		        break;

		        case 'border-width':
		        	$props = [ 'border-width' ];
		        break;

		        case 'font-size':
		        	$props = [ 'font-size' ];
		        break;

		        case 'height':
		        	$props = [ 'height' ];
		        break;

		        case 'size':
		        	$props = [ 
		        		'height',
		        		'width' 
		        	];
		        break;

		        case 'max-height':
		        	$props = [ 'max-height' ];
		        break;

		        case 'min-height':
		        	$props = [ 'min-height' ];
		        break;

		        case 'line-height':
		        	$props = [ 'line-height' ];
		        break;

		        case 'top':
		        	$props = [ 'top' ];
		        break;

		        case 'right':
		        	$props = [ 'right' ];
		        break;

		        case 'left':
		        	$props = [ 'left' ];
		        break;

		        case 'width':
		        	$props = [ 'width' ];
		        break;

		        case 'max-width':
		        	$props = [ 'max-width' ];
		        break;

	        }
	    }

	    $data = [];

	    foreach( self::$devices as $device ){
	        $data[ $device ] = [];
	        foreach( $props as $i => $prop ){
	        	
	            if( isset( $attr[ 'values' ][ $device ] ) ){
	                if( is_array( $attr[ 'values' ][ $device ] ) ){
	                
	                	$data[$device][$prop] = $attr['values'][$device][$i] . $attr['activeUnit'];

	                }else{
	                	$data[ $device ] = [
	                	    $prop => $attr[ 'values' ][ $device ]. $attr[ 'activeUnit' ],
	                	];
	                }
	            }
	        }
	    }

	    return $data;
	}

	/**
	 * get compatible array from the value of typography control
	 *
	 * @access public
	 * @since 1.0.0
	 * @return array
	 */
	public static function get_typography_values( $typo, $devices = false ){

	    $props = $devices ? $devices : [
	        'mobile'  => [],
	        'tablet'  => [],
	        'desktop' => []
	    ];

	    if( $typo ){

	        foreach( $props as $device => $a ){

	            if( isset( $typo[ 'fontSize' ] ) ){
	                $title_size = $typo[ 'fontSize' ];
	                $props[ $device ][ 'font-size' ] = $title_size[ 'values' ][ $device ] . $title_size[ 'activeUnit' ];
	            }

	            if( isset( $typo[ 'fontWeight' ] ) ){
	                $props[ $device ][ 'font-weight' ] = $typo[ 'fontWeight' ];
	            }

	            if( $device == 'desktop' ){

	                if( isset( $typo[ 'fontFamily' ] ) ){
	                    $props[ $device ][ 'font-family' ] = empty( $typo[ 'fontFamily' ] ) ? 'inherit' : $typo[ 'fontFamily' ] ;
	                }

	                if( isset( $typo[ 'textTransform' ] ) ){
	                    $props[ $device ][ 'text-transform' ] = $typo[ 'textTransform' ];
	                }
	            }

	            if( isset( $typo[ 'lineHeight' ] ) ){

	                $title_lh = $typo[ 'lineHeight' ];

	                $props[ $device ][ 'line-height' ] = $title_lh[ 'values' ][ $device ];
	            }
	        }
	    }
	    
        // self::add_font($props['desktop']['font-family']['value']);
	    return $props;
	}

	/**
	 * return extracted property values
	 *
	 * @access public
	 * @since 1.0.0
	 * @return array
	 */

	public static function extract_properties( $property_type, $attrs, $properties ) {
	    $extracted = [];

	    foreach ( $properties as $attr_key => $attr_prop ) {
            if ( $property_type === 'dimension' ) {
                $extracted[ $attr_key ] = self::get_dimension_values( $attr_prop, $attrs[ $attr_key ] );
            } elseif ( $property_type === 'typography' ) {
                $extracted[ $attr_prop ] = self::get_typography_values( $attrs[ $attr_prop ] );
            }
	    }

	    return $extracted;
	}



}