<?php 
/** 
 * Plugin Name: Eldar slider posts 
 * Author: Eldar Lebedev 
 * Author URI: http://www.google.com 
 */ 
 
// Allow theme to parse shortcodes in widgets 
add_filter('widget_text', 'do_shortcode'); 
 
add_shortcode('my-plugin', function() { 
    // ob_start(); 
   global $post; 
 $posts = get_posts( array( 
   'numberposts' => 3, 
   'orderby'     => 'date', 
   'order'       => 'DESC', 
   'post_type'   => 'post', 
   'suppress_filters' => true,  
 ) ); 
?> 
 
<section class="zustandsorientiert"> 
 <h2 class="el_h2">zustandsorientiert</h2> 
 <div class="zustandsorientiert_slider owl-carousel"> 
 
 <?php 
  foreach( $posts as $post ){ 
    setup_postdata($post); 
 ?> 
  
  <div class="zustandsorientiert_slider-item"> 
   <a href="<?php the_permalink();?>"> 
    <?php the_post_thumbnail(); ?> 
    <h4 class="el_h4"><?php the_title();?></h4> 
   </a> 
  </div> 
 
 <?php } ?> 
 
 </div> 
</section> 
 
<?php 
 wp_reset_postdata(); // сброс 
 $myreturn = ob_get_clean(); 
 return $myreturn; 
}); 
 
?>