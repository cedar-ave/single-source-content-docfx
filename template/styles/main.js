// Single source plain-text terms
// Replace {{ keys }} with plain-text values in sourcedContent/terms.json at directory root

var terms = (function () {
    var json = null;
    var pathname = window.location.pathname;
    // console.log(pathname);
    $.ajax({
      async: false,
      global: false,
      url: pathname + "/sourcedContent/terms.json",
      dataType: "json",
      success: function (data) {
        json = data;
      },
    });

    for (let [key, value] of Object.entries(json)) {
      // console.log(`${key}: ${value}`);
      var toReplace = "{{ " + key + " }}";
      var replaceWith = value;
      document.body.innerHTML = document.body.innerHTML.replace(
        toReplace,
        replaceWith
      );
    }
    return terms;
  })();
  
  // Add a bar above selected paragraphs
  // Replace {{ keys }} with icon and message banner from sourcedContent/messages.json at directory root
  
  var messages = (function () {
    var json = null;
    var pathname = window.location.pathname;
    // console.log(pathname)
    $.ajax({
      async: false,
      global: false,
      url: pathname + "/sourcedContent/messages.json",
      dataType: "json",
      success: function (data) {
        json = data;
      },
    });
    for (var k in json) {
      var o = json[k];
      // console.log(o.message);
      // console.log(o.icon);
      var toReplace = "{{ " + k + " }}";
      var replaceWith =
        '<p class="message">' +
        '<i class="fa ' +
        o.icon +
        '"></i>' +
        o.message +
        "</p>";
      document.body.innerHTML = document.body.innerHTML.replace(
        toReplace,
        replaceWith
      );
    }
    return messages;
  })();
  