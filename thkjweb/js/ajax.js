$.ajax({
                 type: "GET",
                 url: "http://192.168.2.141:7180/fileResource/fileResourceCaseList",
                 contentType: 'application/x-www-form-urlencoded;charset=utf-8',
                 data: {username:$("#username").val(), password:$("#password").val()},
                 dataType: "json",
                 success: function(data){
                             console.log(data);
                          },
                 error:function(e){
                             console.log(e);
                 }
             });
    
        // $.ajax({
        //     url:'/api/fileResource/fileResourceCaseList',
        //     method:"GET",
        //     headers:{
        //         Authortion:"",
        //     },
        //     data:{
        //         id:1,
    
        //     },
        //     success: function (data, status) {
        //         if (status == "success") {
        //             console.log(data)
        //         }
        //         var id = data.id;
        //         console.log(id);
        //     }
    
        // }).done(function(result){
        
           
        // }).fail(function(error){
    
        // })