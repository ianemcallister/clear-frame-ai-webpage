<?php function agencyio_header_menu_setting( $wp_customize ) {

	$wp_customize->add_setting( 
        'hide_show_call_btn' , 
            array(
            'default' => '1',
            'capability'     => 'edit_theme_options',
            'sanitize_callback' => 'agencyup_header_sanitize_checkbox',
        ) 
    );

	$wp_customize->add_control(
		'hide_show_call_btn', 
			array(
				'label'       => esc_html__( 'Hide/Show Call Us', 'agencyio' ),
				'section'     => 'nav_btn_section',
				'type'        => 'checkbox'
			) 
		);

		$wp_customize->add_setting(
			'call_us_icon',
			array(
				'sanitize_callback' => 'sanitize_text_field',
				'capability' => 'edit_theme_options',
				'default' => 'fa-phone'
			)
		);  
	
		$wp_customize->add_control( 
			'call_us_icon',
			array(
				'label'         => __('Call Us Icon','agencyio'),
				'section'       => 'nav_btn_section',
				'type'       => 'text'
			)  
		);

		$wp_customize->add_setting(
			'call_us_label',
			array(
				'sanitize_callback' => 'sanitize_text_field',
				'capability' => 'edit_theme_options',
				'default' => 'Call us'
			)
		);  
	
		$wp_customize->add_control( 
			'call_us_label',
			array(
				'label'         => __('Call Us Text','agencyio'),
				'section'       => 'nav_btn_section',
				'type'       => 'text'
			)  
		);

		$wp_customize->add_setting(
			'call_us_number',
			array(
				'sanitize_callback' => 'sanitize_text_field',
				'capability' => 'edit_theme_options',
				'default' => '+ (007) 548 58 5400'
			)
		);  
	
		$wp_customize->add_control( 
			'call_us_number',
			array(
				'label'         => __('Call Us Number','agencyio'),
				'section'       => 'nav_btn_section',
				'type'       => 'text'
			)  
		);


}
add_action( 'customize_register', 'agencyio_header_menu_setting' );