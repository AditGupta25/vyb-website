$(document).on "turbolinks:load", ->
  if($('#user-info-table').length > 0)
    $('#user-info-table').DataTable()
