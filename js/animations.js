$(function() {
$('#main').smoothState();
  onReady: {
    duration: 300,
    render: function ($container, $newContent) {
      $container.html($newContent);
    }
  }
});
