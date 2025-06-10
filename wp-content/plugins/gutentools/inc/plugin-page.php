<?php 

if( !class_exists( 'Gutentools_Settings' ) ){
	class Gutentools_Settings{

		public static $instance;
		public $setting;

		public $menu_slug = 'gutentools';

		public static function get_instance() {
		    if ( ! self::$instance ) {
		        self::$instance = new self();
		    }
		    return self::$instance;
		}

		public function __construct(){
			// add_action( 'plugins_loaded', array( $this, 'register_menu' ), 90 );
			add_action( 'admin_menu', array( $this, 'add_menu' ), 90 );
		}

		public function add_menu(){

			add_menu_page(
		       esc_html__( 'Gutentools', 'gutentools' ), # page title
		       esc_html__( 'Gutentools', 'gutentools' ), # menu title
		       'manage_options', # capability
		       $this->menu_slug, 
		       array( $this, 'render_main_page' ),
		       'dashicons-hammer', # icon
		       55
		    );
		}

		public function render_main_page(){
			require_once Gutentools_Path . "inc/admin-page.php";
		}

	}

	Gutentools_Settings::get_instance();
}