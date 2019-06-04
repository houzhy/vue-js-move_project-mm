<template>
    <div class="messageBox">
        <h2>{{title}}</h2>
        <p>{{content}}</p>
        <div>
            <div @touchstart="handleCancel">{{cancel}}</div>
            <div @touchstart="handleOk">{{ok}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MessageBox"
    }
</script>

<style scoped>
    .messageBox{width: 200px; height: 130px; border: 1px #ccc solid; border-radius: 4px;background: white; box-shadow: 3px 3px 3px 3px #cecece;position: absolute;left: 50%;top:50%;transform: translate(-50%, -50%);}
    .messageBox h2{text-align: center;line-height: 40px;font-size: 18px; color: #f03d37;}
    .messageBox p{
        text-align: center;
        line-height: 40px;
    }
    .messageBox > div{ display: flex; position: absolute; bottom: 0; width: 100%; border-top:1px #ccc solid; color: #333333;}
    .messageBox > div div{ flex: 1;text-align: center; line-height: 40px; border-right: 1px #ccc solid; color: #666; }
    .messageBox > div div:last-child{border:none; color: #333333;}
</style>