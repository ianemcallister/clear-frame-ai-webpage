<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @package Agencyup
 */
get_header(); ?>
<!--==================== ti breadcrumb section ====================-->
<?php get_template_part('index','banner'); ?>
<!--==================== main content section ====================-->
<main id="content">
    <div class="container">
      	<div class="row">
      	<?php $content_layout = get_theme_mod('agencyup_page_layout','align-content-right');?>
			<!-- Blog Area -->
			<?php if( class_exists('woocommerce') && (is_account_page() || is_cart() || is_checkout())) { ?>
				<div class="col-md-12" >
					<?php if (have_posts()) {  while (have_posts()) : the_post();  the_content(); endwhile; } 
			} else {
				if($content_layout == 'align-content-left'){ ?>
					<!--Sidebar Area-->
					<aside class="col-lg-3 col-md-4">
						<?php get_sidebar(); ?>
					</aside>
				<?php } ?>

				<div class="col-lg-<?php echo ( $content_layout == 'full-width-content' ? '12' :'9 col-md-8' ); ?>">
					<div class="bs-card-box shd"> <?php
						while (have_posts()) : the_post();
							if(has_post_thumbnail()) {
								if ( is_single() ) { ?>
									<figure class="post-thumbnail">
										<?php the_post_thumbnail('full'); ?>					
									</figure>
								<?php }
								else { ?>
									<figure class="post-thumbnail">
										<a href="<?php the_permalink(); ?>" >
											<?php the_post_thumbnail('full'); ?>
										</a>				
									</figure>
								<?php }
							}		
							the_content();
							
							if (comments_open() || get_comments_number()) :
								comments_template();
							endif;
						endwhile;
						agencyup_edit_link(); ?>	
					</div>
				</div>

				<?php if($content_layout == 'align-content-right'){ ?>
					<!--Sidebar Area-->
					<aside class="col-lg-3 col-md-4">
						<?php get_sidebar(); ?>
					</aside>
				<?php } ?>
			<?php } ?>
			</div>
	  	</div>
	</div>
</main>
<?php
get_footer();