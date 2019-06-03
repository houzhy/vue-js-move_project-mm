<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" v-model="message">
            </div>
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li v-for="item in movieList" :key="item.id">
                    <div class="img"><img :src="item.img | setWH('128.180')"></div>
                    <div class="info">
                        <p><span>{{item.nm}}</span><span>{{item.sc}}</span></p>
                        <p>{{item.enm}}</p>
                        <p>{{item.cat}}</p>
                        <p>{{item.rt}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data(){
            return {
                message:'',
                movieList: []
            }
        },
        watch: {
            message(newVal){
                // 取消上一次请求
                this.cancelRequest();
                this.$axios.get('/api/searchList?cityId=10&kw='+newVal,{
                    cancelToken: new this.$axios.CancelToken((c) =>{
                        this.source = c;
                    })
                }).then((res)=>{
                    let msg = res.data.msg;
                    let movies = res.data.data.movies;
                    if(msg === 'ok' && movies){
                        this.movieList = movies.list;
                    }
                }).catch((err) => {
                    if (this.$axios.isCancel(err)) {
                        console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                    } else {
                        //handle error
                        console.log(err);
                    }
                })

            }
        },
        methods:{
            //阻止axios频繁请求
            cancelRequest(){
                if(typeof this.source ==='function'){
                    this.source('终止请求')
                }
            },
        }
    }
</script>

<style scoped>

    #content .search_body{ flex:1; overflow:auto;}
    .search_body .search_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
    .search_body .search_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 20px;}
    .search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
    .search_body .search_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}
    .search_body .search_result{}
    .search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}
    .search_body .search_result ul{}
    .search_body .search_result li{ border-bottom:1px #c9c9c9 dashed; padding: 10px 15px; box-sizing:border-box; display: flex;}
    .search_body .search_result .img{ width: 60px; float:left; }
    .search_body .search_result .img img{ width: 100%; }
    .search_body .search_result .info{ float:left; margin-left: 15px; flex:1;}
    .search_body .search_result .info p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
    .search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
    .search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; color:#fc7103;}


    /*#content.contentDetail{ display: block; margin-bottom:0;}*/
    /*#content .detail_list{ height:200px; width:100%; position: relative; overflow: hidden;}*/
    /*.detail_list .detail_list_bg{ width:100%; height:100%; background: url(../images/movie_1.jpg) 0 40%; filter: blur(20px); background-size:cover; position: absolute; left: 0; top: 0;}*/
    /*.detail_list .detail_list_filter{ width:100%; height:100%; position: absolute;background-color: #40454d;opacity: .55; position: absolute; left: 0; top: 0; z-index: 1;}*/
    /*.detail_list .detail_list_content{ display: flex; width:100%; height:100%; position: absolute; left: 0; top: 0; z-index: 2;}*/
    /*.detail_list .detail_list_img{ width:108px; height: 150px; border: solid 1px #f0f2f3; margin:20px;}*/
    /*.detail_list .detail_list_img img{ width:100%; height: 100%;}*/
    /*.detail_list .detail_list_info{ margin-top: 20px;}*/
    /*.detail_list .detail_list_info h2{ font-size: 20px; color:white; font-weight: normal; line-height: 40px;}*/
    /*.detail_list .detail_list_info p{ color:white; line-height: 20px; font-size: 14px; color:#ccc;}*/

    /*#content .detail_intro{ padding: 10px;}*/
    /*#content .detail_player{ margin:20px;}*/
    /*.detail_player .swiper-slide{ width:70px; margin-right: 20px; text-align: center; font-size: 14px;}*/
    /*.detail_player .swiper-slide img{ width:100%; margin-bottom: 5px;}*/
    /*.detail_player .swiper-slide p:nth-of-type(2){ color:#999;}*/




</style>