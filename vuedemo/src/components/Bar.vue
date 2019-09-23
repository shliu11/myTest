<template>

</template>

<script>
    // 通过ajax请求
    export default {
        name: 'Bar',
        data () {
            return {
                user: {}
            }
    },
        mounted: function() {
            var _self=this;
            $.ajax({
                url:"/api/article/get/"+"123",
//              url:"/api/courseOrder/search",
                type:"get",
                dataType: "JSON",
                async : false,
                success:function(result){
                    debugger
                    _self.user = result;
                },
                error:function(jqXHR, textStatus, errorThrown){
                    console.log("请求失败");
                    /*弹出jqXHR对象的信息*/
                    console.log(jqXHR.responseText);
                    console.log(jqXHR.status);
                    console.log(jqXHR.readyState);
                    console.log(jqXHR.statusText);
                    /*弹出其他两个参数的信息*/
                    console.log(textStatus);
                    console.log(errorThrown);
                }
            });
        }
    }
    //通过 resource 请求
   /* export default {
        name: 'Bar',
        data() {
            return {
                user: {}
            }
        },
        mounted: function () {
            this.$http.get('/api/article/get/' + '123', {}, {
//  this.$http.get('/api/courseOrder/search', {}, {
                headers: {},
//      emulateJSON: true
            }).then(function (response) {
                // 这里是处理正确的回调
                debugger
                this.user = response.data
                // this.articles = response.data["subjects"] 也可以

            }, function (response) {
                // 这里是处理错误的回调
                console.log(response)
            });
        }
    }*/
</script>

<style scoped>

</style>
