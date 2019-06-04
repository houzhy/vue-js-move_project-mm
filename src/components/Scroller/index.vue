<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    import  BScroll from 'better-scroll';
    export default {
        name: "Scroller",
        props:{
            handleToScroll:{
                type: Function,
                default:function () {

                }
            },
            handleToTouchEnd:{
                type: Function,
                default:function () {

                }
            }
        },
        mounted() {
            let scroll = new BScroll(this.$refs.wrapper,{
                tap: true,
                probeType: 1
            });
            this.scroll = scroll;
            scroll.on('scroll',(pos)=>{
                // console.log('scroll');
                this.handleToScroll(pos);
            });
            scroll.on('touchEnd',(pos)=>{
                // console.log('end');
                this.handleToTouchEnd(pos);
            });
        },
        methods:{
            toScrollTop(y){
                this.scroll.scrollTo(0,y);
            }
        }
    }
</script>

<style scoped>
    .wrapper{
        height: 100%;
    }
</style>