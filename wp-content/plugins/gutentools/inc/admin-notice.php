<?php 

if( !class_exists( 'Gutentools_Notice' ) ){
	class Gutentools_Notice{

		public static $instance;

		public static function get_instance() {
		    if ( ! self::$instance ) {
		        self::$instance = new self();
		    }
		    return self::$instance;
		}

		public function __construct(){
			add_action( 'admin_notices', array( $this, 'gutentools_notice' ));
		}

		public function gutentools_notice(){
	        ?>
	        <div class="notice notice-info is-dismissible">
			    <h2><?php esc_html_e('Gutentools Pro', 'gutentools'); ?></h2>
			    <p><?php esc_html_e('Unlock your website’s potential with GutenTools – the flexible, user-friendly Gutenberg visual sitebuilder for WordPress.', 'gutentools'); ?></p>
			    <p>
			        <a target="_blank" href="https://gutentools.com/price-plan/" class="button-primary"><?php echo esc_html__( 'Upgrade To Pro', 'gutentools' ); ?></a>
			        <a class="button-secondary" href="<?php echo esc_url( admin_url( 'admin.php?page=gutentools' ) ); ?>"><?php esc_html_e( 'Plugin Info', 'gutentools' ); ?></a>
			    </p>
			</div>		        
			<?php
		}

	}

	Gutentools_Notice::get_instance();
}