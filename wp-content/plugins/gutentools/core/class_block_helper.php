<?php
/**
 * Helper class for overall plugin
 *
 * @since 1.0.0
 * @package Gutentools
 */

if( !class_exists( 'Gutentools_Helper' ) ):
	class Gutentools_Helper{

		/**
		 * Enqueue scripts or styles
		 *
		 * @since 1.0.0
		 */
		public static function enqueue( $scripts, $uri=false ){

			# Do not enqueue anything if no array is supplied.
			if( ! is_array( $scripts ) ) return;

			if(! $uri){
				$uri = self::get_plugin_directory_uri();
			}
			
			foreach ( $scripts as $script ) {

				# Do not try to enqueue anything if handler is not supplied.
				if( ! isset( $script[ 'handler' ] ) )
					continue;

				$version = null;
				if( isset( $script[ 'version' ] ) ){
					$version = $script[ 'version' ];
				}

				$minified = isset( $script[ 'minified' ] ) ? $script[ 'minified' ] : true;
				# Enqueue each vendor's style
				if( isset( $script[ 'style' ] ) ){

					$path = $uri .  $script[ 'style' ];
					if( isset( $script[ 'absolute' ] ) ){
						$path = $script[ 'style' ];
					}
					
					$dependency = array();
					if( isset( $script[ 'dependency' ] ) ){
						$dependency = $script[ 'dependency' ];
					}

					if( $minified ){
						$path = str_replace( '.css', '.min.css', $path );
					}
				
					wp_enqueue_style( $script[ 'handler' ], $path, $dependency, $version );
				}

				# Enqueue each vendor's script
				if( isset( $script[ 'script' ] ) ){

					if( $script[ 'script' ] === true || $script[ 'script' ] === 1 ){
						wp_enqueue_script( $script[ 'handler' ] );
					}else{

						$prefix = 'gutentools';

						$path = '';
						if( isset( $script[ 'script' ] ) ){
							$path = $uri .  $script[ 'script' ];
						}

						if( isset( $script[ 'absolute' ] ) ){
							$path = $script[ 'script' ];
						}

						$dependency = array( 'jquery' );
						if( isset( $script[ 'dependency' ] ) ){
							$dependency = $script[ 'dependency' ];
						}

						$in_footer = true;

						if( isset( $script[ 'in_footer' ] ) ){
							$in_footer = $script[ 'in_footer' ];
						}

						if( $minified ){
							$path = str_replace( '.js', '.min.js', $path );
						}
						wp_enqueue_script( $prefix . $script[ 'handler' ], $path, $dependency, $version, $in_footer );
					}
				}
			}
		}

			/**
		 * Plugin fonts | Google Fonts
		 *
		 * @var array
		 */
		protected static $default_fonts = array(
			'Open Sans'        => 'Open+Sans:300,400,600,700,800',
			'Raleway'          => 'Raleway:300,400,500,600,700,800,900',
			'Roboto'           => 'Roboto:300,400,500,700,900',
		);

		/**
		 * retrieve fonts
		 * @since 1.0.8
		 */
		public static function get_fonts(){
			return apply_filters( 'gutentools-default-fonts', self::$default_fonts );
		}

		public function process_css( $styles, $device ) {
			require_once Gutentools_Path . "core/class_process_css.php";
			$css = new Gutentools_CSS();

			$breakpoints = [
				'tablet' => '(max-width: 991px)',
				'mobile' => '(max-width: 767px)',
			];

			foreach ($styles as $style) {
				$block_id = $style[ 'attrs' ][ 'block_id' ];
				foreach ($style['css'] as $key => $value) {
					
					$selectors = explode(', ', $key);
					$selector = '';

					foreach ( $selectors as $i => $sel ) {
						$selector .= ( $i > 0 ? ', ' : '' ) . "#$block_id $sel";
					}

					if (isset($breakpoints[$device])) {
						$css->start_media_query($breakpoints[$device]);
					}

					$css->set_selector($selector)->add_properties($value);

					if (isset($breakpoints[$device])) {
						$css->stop_media_query();
					}
				}
			}

			return $css->css_output();
		}

		/**
		 * Retrives plugin directory uri
		 *
		 * @since 1.0.0
		 */
		public static function get_plugin_directory_uri(){
			return esc_url( plugins_url( '/', Gutentools_File ) );
		}

		public static function wp_kses_extended( $html ){

			$kses_defaults = wp_kses_allowed_html( 'post' );
			$svg_args = array(
		        'svg' => array(
		            'class'           => true,
		            'aria-hidden'     => true,
		            'aria-labelledby' => true,
		            'role'            => true,
		            'xmlns'           => true,
		            'width'           => true,
		            'height'          => true,
		            'style'           => true,
		            'fill'            => true,
		            'viewbox'         => true, // Must be lowercase!
		            'enable-background' => true,
		            'transform'       => true,
		            'preserveAspectRatio'   => true,
		        ),
		        'g'     => array(
		            'fill' => true,
		            'transform' => true
		        ),
		        'title' => array(
		            'title' => true,
		        ),
		        'path'  => array(
		            'd'    => true,
		            'fill' => true,
		            'transform' => true,
		        ),
		        'image' => array(
		            'x'          => true,
		            'y'          => true,
		            'width'      => true,
		            'height'     => true,
		            'xlink:href' => true,
		        ),
		    );
			$allowed_tags = array_merge( $kses_defaults, $svg_args );

			echo wp_kses( $html, $allowed_tags );
		}

		public static function fix_escaped_tags_in_js( $escaped_js_code ) {
		    $fixed_js_code = str_replace(
		        [
		            '&lt;',
		            '&gt;', 
		            '&quot;', 
		            '&#039;', 
		            '&amp;', 
		            '\\\'',
            		'\\"',
		        ],
		        [
		            '<',
		            '>',
		            '"',
		            "'",
		            '&',
		            "'", 
            		'"',
		        ],
		        $escaped_js_code
		    );

		    return $fixed_js_code;
		}

		public static function is_woocommerce_active(){
		    if( in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) ) ){
		        return 1;
		    } else {
		        return 0;
		    }
		}


	}
endif;