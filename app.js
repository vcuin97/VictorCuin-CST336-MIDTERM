 /* global $*/
            /* global _ */
          $(document).ready(function(){
              //images being printed
              //let keywords = ["sport car", "abstract art", "puppy", "jeep"];
              //shuffled
              //keywords = _.shuffle(keywords);
              //array starting from 0,1,2,3.
              $("#ISBN").val([0]);
              //functions to change when clicked ver or hor
              //$("#orientation").on("change", search);
                //class example
             // $("#keyword").val("dogs");// example for one image
             var url = "http://openlibrary.org/api/books?bibkeys=ISBN:" + $("#ISBN").val();
             var isbn = $("#ISBN").val();
              search();
              //dont change
              $("#searchBtn").on("click", search);
                //
              function search(){
                  $.ajax({
                     
                     
                  method: "GET",
                  url: url,
                  dataType: "json",
                  data: { "ISBN": + isbn},
                 
                  success: function(result,status) {
                     result.mycallback.forEach(function (src){ 
                        $("#").append("<div class=\"img-thumbnail flex-item\"><img src=\""+src+"\"></div>");
                        $("#title").html(result.title);
                        $("#authors").html(result.authors);
                        $("#publish_date").html(result.publish_date);
                        $("#publishers").html(result.publishers);
                        $("#ISBN").html(result.isbn);
                        $("#number_of_pages").html(result.number_of_pages);
                     });
                     
                     
                  }
                  // alert(result.hits[0].webformatURL);
                });//ajax
              }
             
            });//document.ready