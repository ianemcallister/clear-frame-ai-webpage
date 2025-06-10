<?php 

if( !class_exists( 'Gutentools_Script_Loader' ) ){
	class Gutentools_Script_Loader{

		public static $instance;

		public static function get_instance() {
		    if ( ! self::$instance ) {
		        self::$instance = new self();
		    }
		    return self::$instance;
		}

		public function __construct(){
			add_action( 'admin_enqueue_scripts', array( $this, 'add_admin_scripts' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'add_style_scripts' ) );
			add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_custom_toolbar_link_script' ) );
			add_action( 'enqueue_block_assets', array( $this, 'add_block_assets' ) );
		}

		public function add_admin_scripts(){
			wp_enqueue_style(
                'gutentools-admin-style', 
                Gutentools_Url . '/assets/styles/admin.css', 
                array(),
                "1.0.0"
            );

            wp_enqueue_script(
		        'gutentools-admin-script',
		        Gutentools_Url . '/assets/scripts/script.js', 
		        array('jquery'),
		        '1.0.0',
		        true
		    );
		}

		public function enqueue_custom_toolbar_link_script() {

		    wp_enqueue_script(
		        'gutentools-toolbar-script',
		        Gutentools_Url . '/assets/scripts/importer.js', 
		        array('jquery'),
		        '1.0.0',
		        true
		    );
		}

		public function add_block_assets() {

		    wp_enqueue_style(
                'font-awesome', 
                Gutentools_Url . '/assets/vendors/font-awesome/css/all.min.css', 
                array(),
                "6.5.1"
            );
		}

		public function add_style_scripts() {
			 wp_enqueue_style(
                'gutentools-styles', 
                Gutentools_Url . '/assets/styles/style.css', 
                array(),
                "6.5.1"
            );

		    wp_enqueue_style(
                'font-awesome', 
                Gutentools_Url . '/assets/vendors/font-awesome/css/all.min.css', 
                array(),
                "6.5.1"
            );

            wp_enqueue_style(
                'slick-slider', 
                Gutentools_Url . '/assets/vendors/slick/slick.min.css', 
                array(),
                "1.8.0"
            );

            wp_enqueue_style(
                'slick-slider-theme', 
                Gutentools_Url . '/assets/vendors/slick/slick-theme.css', 
                array(),
                "1.8.0"
            );

            wp_enqueue_script(
		        'slick-slider',
		        Gutentools_Url . '/assets/vendors/slick/slick.min.js', 
		        array('jquery'),
		        '1.8.0',
		        true
		    );

		    wp_enqueue_script(
		        'waypoint',
		        Gutentools_Url . '/assets/vendors/count-up/jquery.waypoints.min.js', 
		        array('jquery'),
		        '1.0.5',
		        true
		    );

		    wp_enqueue_script(
		        'jquery-countup',
		        Gutentools_Url . '/assets/vendors/count-up/jquery.countup.min.js', 
		        array('jquery'),
		        '1.0.5',
		        true
		    );

			$scripts = array(
				array(
					'handler' => 'gutentools-fonts',
					'style' => 'https://fonts.googleapis.com/css?family=' . join('|', Gutentools_Helper::get_fonts()) . '&display=swap',
					'absolute' => true,
					'minified' => true,
				), 
			);

			Gutentools_Helper::enqueue($scripts);
		}

	}

	Gutentools_Script_Loader::get_instance();
}