<?php
/*
Plugin Name: Howmany.blog Widget
Description: Embeds the Howmany.blog Flutter web app via shortcode [howmany]
Version: 1.0
Author: Aslan Madaev
*/

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

function howmany_blog_shortcode( $atts ) {
    // path to plugin public index.html
    $src = plugins_url( 'public/index.html', __FILE__ );

    $atts = shortcode_atts( array(
        'width'  => '100%',
        'height' => '700px',
        'style'  => '',
    ), $atts, 'howmany' );

    $style_attr = esc_attr( $atts['style'] );
    $width = esc_attr( $atts['width'] );
    $height = esc_attr( $atts['height'] );

    return sprintf(
        '<div class="howmany-blog-wrapper" style="%s"><iframe src="%s" width="%s" height="%s" style="border:0; width:%s; height:%s;" loading="lazy" allowfullscreen></iframe></div>',
        $style_attr,
        esc_url( $src ),
        $width,
        $height,
        $width,
        $height
    );
}

add_shortcode( 'howmany', 'howmany_blog_shortcode' );