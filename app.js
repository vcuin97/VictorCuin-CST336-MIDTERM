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
                     });
                     
                     $("#info_url").html(result.info_url);
                     $("#images").html(`<figure><img src=""https://covers.openlibrary.org/b/id/5546156-M.jpg"">Likes: ${result.hits[0].likes}
                                        <img src='${result.cover[0].webformatURL}' width='300'></figure>`);
                     
                  }
                  // alert(result.hits[0].webformatURL);
                });//ajax
              }
             
            });//document.ready