var v = new Vue({
    el:'#casees',
    data:{
        list:[
           {caseName:"孔子博物馆1",presentation:'sdadasdadasdasdadasdad'} ,
           {caseName:"孔子博物馆3",presentation:'sdadasdadasdasdadasdad'} ,
           {caseName:"孔子博物馆4",presentation:'sdadasdadasdasdadasdad'}
        ]
    },
    created(){
        this.getList()
    },
    computed: {
        // 限制标题10个字后面的点点 
        controlTextList(){
            let list = this.list
            
            list.forEach((item,index) =>{
                if (item.caseName.length > 10){
                    // 限制字数10个字
                    list[index].caseName = item.caseName.slice(0,10) + '...'
                }
            })
            return this.list
        }
        
    },
    methods:{
                getList(){
                    this.$http.get('http://39.105.207.202:7180/fileResource/fileResourceCaseList').then(result =>{
                        var result = result.body
                    
                        if(result.code === 1000){
                        
                        this.list = result.data

                        }else{
                            
                            console.log("获取失败")
                        }
                    })
                }
            }
});