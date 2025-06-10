<?php
/**
 * Gutentools Blocks
 * 
 * @since Gutentools 1.0.0
 */
if( !class_exists( 'Gutentools_Config' ) ){

    class Gutentools_Config extends Gutentools_Helper{

        protected static $instance;
        
        public static function get_instance() {
            if ( null === self::$instance ) {
                self::$instance = new self();
            }

            return self::$instance;
        }

    	public function __construct(){
            add_action( 'enqueue_block_assets', [ $this, 'block_assets' ] );
    		add_filter( 'block_categories_all', [ $this, 'register_category' ], 99, 1 );
            add_action( 'after_gutentools_gutentools_load', [ $this, 'include_files' ] );
            add_action( 'init', [ $this, 'load_text_domain' ] );
    	}

        public function register_category( $categories ){
		    # setup category array
		    $category = [
		        'slug' => 'gutentools',
		        'title' => __( 'GutenTools', 'gutentools' ),
		    ];

		    # make a new category array and insert ours at position 1
		    $new_categories = [];
		    $new_categories[0] = $category;

		    # rebuild cats array
		    foreach ($categories as $category) {
		        $new_categories[] = $category;
		    }

		    return $new_categories;
		}

        public function include_files(){      	

            require_once Gutentools_Path . "core/gutentools_block.php";
            
            $files = glob(Gutentools_Path . 'core/blocks/*.php');

		    if( is_array( $files ) ){
		        foreach( $files as $file ){
		            if( file_exists( $file ) ){
		                require $file;
		            }
		        }
		    }        
		}

        /**
         * Register Style for banckend and frontend
         * dependencies { wp-editor }
         * @access public
         * @return void
         * @since 1.0.0
         */
        public function block_assets(){

            if (is_admin()) {
                $scripts = array(
                    array(
                        'handler' => 'gutentools-fonts',
                        'style' => 'https://fonts.googleapis.com/css?family=' . join('|', self::get_fonts()) . '&display=swap',
                        'absolute' => true,
                        'minified' => true,
                    ), 
                );

                self::enqueue($scripts);

                wp_enqueue_style(
                    'gutentools-editor-style', // Handle
                    Gutentools_Url . '/assets/styles/editor.css', // Path to the editor stylesheet
                    array(), // Dependencies
                    "1.0.0"
                );

                $size = get_intermediate_image_sizes();
                $size[] = 'full';

                $l10n = apply_filters('gutentools_l10n', array(
                    'image_size' => $size,
                    'plugin_path' => self::get_plugin_directory_uri(),
                    'is_woocommerce_active' =>self::is_woocommerce_active(),
                ));

                wp_localize_script( 'gutentools-slider-editor-script', 'Gutentools_VAR', $l10n);

            }
        }

        public function load_text_domain(){
            load_plugin_textdomain( 'gutentools', false, Gutentools_Path . '/languages' );
        }
    }

    Gutentools_Config::get_instance();
}