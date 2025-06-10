<?php
/**
 * Plugin Name: Gutentools
 * Description: Gutentools is a powerful block editor plugin designed for seamless full-site editing. It offers a range of customizable blocks, including page and post sliders, containers, and more, all with flexible responsive controls. With an intuitive drag-and-drop visual editor, you can easily create engaging layouts and dynamic content for any device. Unlock the full potential of WordPress with blocks that are tailored for a smooth design experience.
 * Version: 1.0.9
 * Author: Gutentools
 * Author URI: https://gutentools.com/
 * License: GPLv3 or later
 * License URI: https://opensource.org/licenses/GPL-3.0
 * Text Domain: gutentools
 */

//  Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'gutentools_get_version' ) ) {
	/**
	 * Get Plugin Version
	 *
	 * @return string
	 */
	function gutentools_get_version() {
		$data = get_file_data( __FILE__, array( 'version' => 'Version' ) );
		return $data['version'];
	}
}

add_action( 'plugins_loaded', 'gutentools_load' ) ;

function gutentools_load(){
	define( 'Gutentools_File', __FILE__ );
	define( 'Gutentools_Url', plugin_dir_url( Gutentools_File ) );
	define( 'Gutentools_Path', plugin_dir_path( Gutentools_File ) );
	define( 'Gutentools_Version', gutentools_get_version() );

	require_once Gutentools_Path . "core/class_block_helper.php";
	require_once Gutentools_Path . "core/block_configuration.php";
	require_once Gutentools_Path . "inc/svg.php";
	require_once Gutentools_Path . "inc/plugin-page.php";
	require_once Gutentools_Path . "inc/script_loader.php";
    if ( ! function_exists( 'gutentools_pro_get_version' ) ) 
        require_once Gutentools_Path . "inc/admin-notice.php";

    do_action( 'after_gutentools_gutentools_load' );
}

function gutentools_register_plugin_image() {
    $existing_attachment_id = get_option( 'gutentools_image_id' );
    $source_file = plugin_dir_path( __FILE__ ) . 'img/default.png';
    $upload_dir = wp_upload_dir();
    $dest_file  = $upload_dir['path'] . '/default.png';

    if ( $existing_attachment_id ) {
        $existing_file = get_attached_file( $existing_attachment_id );

        if ( $existing_file !== $dest_file || !file_exists( $existing_file ) ) {
            wp_delete_attachment( $existing_attachment_id, true );
            update_option( 'gutentools_image_id', '' ); 
        } else {
            return;
        }
    }

    if ( file_exists( $source_file ) ) {
        if ( ! copy( $source_file, $dest_file ) ) {
            error_log( 'Failed to copy file to uploads directory.' );
            return;
        }

        $filetype = wp_check_filetype( $dest_file, null );

        $attachment = [
            'post_mime_type' => $filetype['type'],
            'post_title'     => sanitize_file_name( basename( $dest_file ) ),
            'post_content'   => '',
            'post_status'    => 'inherit',
        ];

        $attachment_id = wp_insert_attachment( $attachment, $dest_file );

        require_once( ABSPATH . 'wp-admin/includes/image.php' );
        $attach_data = wp_generate_attachment_metadata( $attachment_id, $dest_file );
        wp_update_attachment_metadata( $attachment_id, $attach_data );

        update_option( 'gutentools_image_id', $attachment_id );
    }
}

add_action( 'init', 'gutentools_register_plugin_image' );
register_activation_hook( __FILE__, 'gutentools_register_plugin_image' );

