<?php
$fc = get_field('page_flexible_content');
$fc_row = $fc[$GLOBALS['fc_index']]; 

$section_id = $fc_row['section_settings']['section_id'];
$section_heading = $fc_row['section_settings']['section_heading'];

$section_type = $fc_row['section_style']['section_type'];
$section_background_color = $fc_row['section_style']['section_background_color'];
$section_text_color = $fc_row['section_style']['section_text_color'];
$section_text_color_string = 'style="color: ' . $section_text_color . ';"';
$section_text_color_background_string = 'style="background-color: ' . $section_text_color . ';"';

$gallery = $fc_row['section_content']['gallery'];
$gallery_title = $fc_row['section_content']['gallery_title'];

if( $section_id == NULL || $section_id == false ){
	$section_id = $GLOBALS['fc_index']; 
} 

?>
<section class="block flexible-content fc fc-gallery" style="background-color: <?php echo $section_background_color; ?>;" id="fc-<?php echo $section_id; ?>">
	<div class="container-fc">
		<?php if( $section_heading ): ?>
			<div class="row fc-section-heading">
				<div class="col-sm-12">
					<h2 class="serif fc-section-heading-text" <?php echo $section_text_color_string; ?>>
						<?php echo $section_heading; ?>
					</h2>
				</div>
			</div>
		<?php endif; ?>
		<?php if( $gallery ): ?>
			<?php if( $gallery_title ): ?>
				<div class="fc-gallery-title">
					<h4 class="centered bold" <?php echo $section_text_color_string; ?>>
						<?php echo $gallery_title; ?>
					</h4>
				</div>
			<?php endif; ?>
			<div class="fc-gallery-slick slick slick-default">
				<?php foreach ($gallery as $image): ?> 
					<div class="slick-slide fc-gallery-slide">
						<div class="fc-gallery-slide-image-container">
							<div class="fc-gallery-slide-image" style="background-image: url('<?php echo $image['sizes']['lg']; ?>');">
							</div>
						</div>
						<div class="fc-gallery-slide-caption-container">
							<?php if( $image['caption'] ): ?>
								<p class="fc-image-caption"><?php echo $image['caption']; ?></p>
							<?php endif; ?>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>
	</div>
</section>