$(function() {
//hang on event of form with id=myform
  $("#comments_form").submit(function(e) {
      //prevent Default functionality
      e.preventDefault();
      //get the action-url of the form
      var actionurl = 'https://dev.staticman.net/v3/entry/github/itssujan/polyglot-developer/staticman/comments';
      //do your own request an handle the results
      $.ajax({
          url: actionurl,
          type: 'post',
          dataType: 'application/json',
          data: $("#comments_form").serialize(),
      }).always( function() {
          $( "#comment-submitted" ).show();
      });

  });

  $( "#ok_button" ).click(function() {
    $('#comments_form').trigger("reset");
    $( "#comment-submitted" ).hide();
  });

  $( "#subscribe").click(function() {
    let url = "https://emailoctopus.com/api/1.5/lists/44bafcfe-1a71-11e9-a3c9-06b79b628af2/contacts";
    let email_id = $("#email_id").val();
    let api_key = "610b2f93-1a71-11e9-a3c9-06b79b628af2";

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'application/json',
        data: {'email_address': email_id, 'api_key': api_key, "status": "SUBSCRIBED"},
    }).always( function() {
        $( "#subscribe" ).hide();
    });

  })

});
