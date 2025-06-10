
<?php if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly ?>

<div class="gutentools-admin-page">
	<div class="gutentools-admin-page-header">
		<div class="gutentools-admin-page-header-left">
			<h1><?php echo esc_html__( 'Gutentools', 'gutentools' ); ?></h1>
			<p><?php echo esc_html__( 'Gutentools: Empowering you to create beautiful, responsive websites with ease using flexible Gutenberg blocks.', 'gutentools' ); ?></p>
		</div>
		<div class="gutentools-admin-page-header-right">
			<p><?php echo esc_html__( 'Version: ', 'gutentools' ). gutentools_get_version(); ?></p>
		</div>
	</div>
	<div class="gutentools-admin-page-content">
		<div class="gutentools-admin-page-content-left">
		<?php if ( ! function_exists( 'gutentools_pro_get_version' ) ) : ?>

			<div class="gutentools-admin-page-content-left-box header">
				<div>
						<h2><?php echo esc_html__( 'Upgrade To PRO & Enjoy Advanced Features!', 'gutentools' ); ?></h2>
						<p><?php echo esc_html__( 'Unlock your website’s potential with GutenTools – the flexible, user-friendly Gutenberg visual sitebuilder for WordPress.', 'gutentools' ); ?></p>
				</div>
				<a target="_blank" href="https://gutentools.com/price-plan/" class="gutentools-admin-page-btn"><?php echo esc_html__( 'Upgrade To Pro', 'gutentools' ); ?></a>
			</div>	
			<?php endif; ?>	

			<h2 class="gutentools-blocks-heading"><?php echo esc_html__( 'Gutentools Blocks', 'gutentools' ); ?></h2>
			<div class="gutentools-icon-box-wrapper">
				<?php 
				$blocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
				foreach ( $blocks as $block_name => $block_type ) {
						if ( strpos( $block_name, 'gutentools/' ) === 0 && empty( $block_type->parent )) { 
							$slug = isset( $block_type->render_callback[0]->slug ) ? $block_type->render_callback[0]->slug : $block_type->title;
							$icon = Gutentools_Icons::get_instance()->get_icon( $slug );

							?>
							<div class="gutentools-icon-box">
								<div>
									<figure><?php Gutentools_Helper::wp_kses_extended( $icon ) ?></figure>
									<h2><?php echo esc_html( $block_type->title ) ?></h2>
									<p><?php echo esc_html( $block_type->description ) ?></p>
									<a target="_blank" href="https://gutentools.com/blocks/<?php echo esc_attr( $slug )  ?>"><?php echo esc_html__( 'View Details', 'gutentools' ); ?></a>
								</div>					
							</div>
						<?php 
						}
					}

				?>
			</div>				
		</div>
		<div class="gutentools-admin-page-content-right">
			<div class="gutentools-admin-page-content-box">
				<h2><?php echo esc_html__( 'Templates & Patterns', 'gutentools' ); ?></h2>
				<p><?php echo esc_html__( 'Explore the possibilities with Gutentools – the versatile, intuitive Gutenberg site builder for WordPress. Check out our stunning templates and pattern demos today!', 'gutentools' ); ?></p>
				<a target="_blank" href="https://demos.gutentools.com/"><?php echo esc_html__( 'Check our Demos', 'gutentools' ); ?></a>
			</div>
			<div class="gutentools-admin-page-content-box">
				<h2><?php echo esc_html__( 'Documentation', 'gutentools' ); ?></h2>
				<p><?php echo esc_html__( 'Unlock the full potential of Gutentools with our comprehensive documentation – your go-to guide for mastering templates, patterns, and all the powerful features of our Gutenberg site builder. Check it out now!', 'gutentools' ); ?></p>
				<a target="_blank" href="https://gutentools.com/docs/"><?php echo esc_html__( 'Read Documentation', 'gutentools' ); ?></a>
			</div>
			<div class="gutentools-admin-page-content-box">
				<h2><?php echo esc_html__( 'Help & Support', 'gutentools' ); ?></h2>
				<p><?php echo esc_html__( 'Have questions or need assistance? Contact us today! Our team is here to help you get the most out of Gutentools.', 'gutentools' ); ?></p>
				<a target="_blank" href="https://gutentools.com/contact/"><?php echo esc_html__( 'Contact Us', 'gutentools' ); ?></a>
			</div>
			<div class="gutentools-admin-page-content-box">
				<h2><?php echo esc_html__( 'Recommended Themes', 'gutentools' ); ?></h2>
				<p><?php echo esc_html__( 'Discover themes that perfectly complement Gutentools.', 'gutentools' ); ?></p>
				<a target="_blank" href="https://demos.gutentools.com/"><?php echo esc_html__( 'Check Our Themes', 'gutentools' ); ?></a>
			</div>
		</div>
	</div>
</div>