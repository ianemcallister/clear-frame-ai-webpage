<?php function agencyup_scripts() {

	wp_enqueue_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.css');

	wp_enqueue_style( 'agencyup-style', get_stylesheet_uri() );
	
	wp_enqueue_style('agencyup-default', get_template_directory_uri() . '/css/colors/default.css');
	
	wp_enqueue_style('smartmenus',get_template_directory_uri().'/css/jquery.smartmenus.bootstrap.css');	

	wp_enqueue_style('font-awesome-css',get_template_directory_uri().'/css/all.css');

	/* Js script */

	wp_enqueue_script( 'agencyup-navigation', get_template_directory_uri() . '/js/navigation.js', array('jquery'));

	wp_enqueue_script('bootstrap', get_template_directory_uri() . '/js/bootstrap.js', array('jquery'));

	wp_enqueue_script('smartmenus-js', get_template_directory_uri() . '/js/jquery.smartmenus.js' , array('jquery'));

	wp_enqueue_script('bootstrap-smartmenus-js', get_template_directory_uri() . '/js/bootstrap-smartmenus.js' , array('jquery'));

	wp_enqueue_script('sticky-js', get_template_directory_uri() . '/js/jquery.sticky.js' , array('jquery'));
	
	wp_enqueue_script('agencyup-main-js', get_template_directory_uri() . '/js/main.js' , array('jquery'));

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action('wp_enqueue_scripts', 'agencyup_scripts');

/**
 	* Added skip link focus
 	*/
	function agencyup_skip_link_focus_fix() {
	?>
	<script>
	/(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);
	</script>
	<?php
	}
add_action( 'wp_print_footer_scripts', 'agencyup_skip_link_focus_fix' );

function agencyup_customizer_selective_preview() {
	wp_enqueue_script(
		'agencyup-customizer-preview', get_template_directory_uri() . '/js/customizer.js', array(
			'jquery',
			'customize-preview',
		), 999, true
	);
}

add_action( 'customize_preview_init', 'agencyup_customizer_selective_preview' );


if ( ! function_exists( 'agencyup_admin_scripts' ) ) :
function agencyup_admin_scripts() {
    wp_enqueue_script( 'agencyup-admin-script', get_template_directory_uri() . '/js/agencyup-admin-script.js', array( 'jquery' ), '', true );
    wp_localize_script( 'agencyup-admin-script', 'agencyup_ajax_object',
        array( 'ajax_url' => admin_url( 'admin-ajax.php' ) )
    );
    wp_enqueue_style('agencyup-admin-style-css', get_template_directory_uri() . '/css/customizer-controls.css');
}
endif;
add_action( 'admin_enqueue_scripts', 'agencyup_admin_scripts' );

function agencyup_menu(){ ?>
	<script>
jQuery('a,input').bind('focus', function() {
   if(!jQuery(this).closest(".menu-item").length && ( jQuery(window).width() <= 992) ) {
	    jQuery('.navbar-collapse').removeClass('show');
	}})
</script>
<?php } 
add_action( 'wp_footer', 'agencyup_menu' );


//Site logo and color
if ( ! function_exists( 'agencyup_header_color' ) ) :

function agencyup_header_color() {
    $agencyup_logo_text_color = get_header_textcolor();
    $agencyup_bg_color = get_background_color();
    $agencyup_title_font_size = get_theme_mod('agencyup_title_font_size');

    ?>
    <style type="text/css">
    <?php
        if ( ! display_header_text() ) :
    ?>
        .site-title,
        .site-description {
            position: absolute;
            clip: rect(1px, 1px, 1px, 1px);
        }
    <?php
        else :
    ?>
        body .site-title a,
        body .site-description {
            color: #<?php echo esc_attr( $agencyup_logo_text_color ); ?>;
        }
        .site-branding-text .site-title a {
			font-size: <?php echo esc_attr( $agencyup_title_font_size ); ?>px;
		}

		@media only screen and (max-width: 640px) {
			.site-branding-text .site-title a {
				font-size: 40px;

			}
		}

		@media only screen and (max-width: 375px) {
			.site-branding-text .site-title a {
				font-size: 32px;

			}
		}

    <?php endif; ?>
		.wrapper { background-color: #<?php echo esc_attr($agencyup_bg_color); ?>; }
    </style>
    <?php
}
endif;



function agencyup_archive_page_title(){
	if( is_archive() )
	{
		$agencyup_archive_title = get_theme_mod('archive_page_title', esc_html__('Archive','agencyup'));
		
		echo '<div class="bs-breadcrumb-title"><h1 class="page-title">';
		
		if ( is_day() ) :
		
		  printf( esc_html__( '%1$s: %2$s', 'agencyup' ), esc_html($agencyup_archive_title), esc_html(get_the_date()) );
		  
        elseif ( is_month() ) :
		
		  printf( esc_html__( '%1$s: %2$s', 'agencyup' ), esc_html($agencyup_archive_title), esc_html(get_the_date()) );
		  
        elseif ( is_year() ) :
		
		  printf( esc_html__( '%1$s: %2$s', 'agencyup' ), esc_html($agencyup_archive_title), esc_html(get_the_date()) );
		  
        elseif( is_category() ):
		
			$agencyup_category_title = get_theme_mod('category_page_title',esc_html__('Category','agencyup'));
			
			printf( esc_html__( '%1$s: %2$s', 'agencyup' ), esc_html($agencyup_category_title), single_cat_title( '', false ) );
			
		elseif( is_author() ):
			
			$agencyup_author_title = get_theme_mod('author_page_title',esc_html__('All posts by','agencyup'));
		
			printf( esc_html__( '%1$s %2$s', 'agencyup' ), esc_html($agencyup_author_title), esc_html(get_the_author() ));
			
		elseif( is_tag() ):
			
			$agencyyp_tag_title = get_theme_mod('tag_page_title',esc_html__('Tag','agencyup'));
			
			printf( esc_html__( '%1$s: %2$s', 'agencyup' ), esc_html($agencyyp_tag_title), single_tag_title( '', false ) );
			
		elseif( class_exists( 'WooCommerce' ) && is_shop() ):
			
		$agencyup_shop_title = get_theme_mod('shop_page_title',esc_html__('Shop','agencyup'));
			
		printf( esc_html__( '%1$s: %2$s', 'agencyup' ), esc_html($agencyup_shop_title), single_tag_title( '', false ));
			
        elseif( is_archive() ): 
		the_archive_title( '<h1 class="page-title">', '</h1>' ); 
		
		endif;
		

		echo '</h1></div>';
	}
	elseif( is_search() )
	{
		$agencyup_search_title = get_theme_mod('search_prefix',__('Search results for','agencyup'));
		
		echo '<div class="bs-breadcrumb-title"><h1 class="page-title">';
		
		printf( esc_html__( '%1$s: %2$s', 'agencyup' ), esc_html($agencyup_search_title), get_search_query() );
		
		echo '</h1></div>';
	}
	elseif( is_404() )
	{
		$agencyup_404_title = get_theme_mod('404_page_title',__('404','agencyup'));
		
		printf( esc_html__( '%1$s: %2$s', 'agencyup' ) , esc_html($agencyup_404_title), '' );
		
		echo '</h1>';
	}
	else
	{
		$allowed_html = array(
			'br'     => array(),
			'em'     => array(),
			'strong' => array(),
			'i'      => array(
				'class' => array(),
			),
			'span'   => array(),
		);	
		
		echo '<div class="bs-breadcrumb-title"><h1 class="page-title">'.esc_html(get_the_title(), $allowed_html).'</h1></div>';
	}
}

