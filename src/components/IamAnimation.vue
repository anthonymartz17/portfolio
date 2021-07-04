<template>
<h4 class="wordCarousel">
    <span>I'm:</span>
    <div>
        <!-- Use classes 2,3, or 4 to match the number of words -->
        <ul class="flip4">
            <li>Passionate!</li>
            <li>Persistent</li>
            <li>Patient</li>
            <li>a risk-taker</li>
        </ul>
    </div>
</h4>
  
</template>

<script>
export default {

}
</script>

<style lang= 'scss'>
.wordCarousel {
    font-size: 36px;
    font-weight: 100;
    color: #eee;
    div {
        overflow: hidden;
        position: relative;
        float: right;
        height: 65px;
        padding-top: 10px;
        margin-top: -10px;
        li {
            font-family: Serif;
            color: #eee;
            font-weight: 700;
            padding: 0 10px;
            height: 45px;
            margin-bottom: 45px;
            display: block;
        }
    }
}

.flip2 { animation: flip2 6s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }
.flip3 { animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }
.flip4 { animation: flip4 10s cubic-bezier(0.23, 1, 0.32, 1.2) infinite; }

@keyframes flip2 {
    0% { margin-top: -180px; }
    5% { margin-top: -90px;  }
    50% { margin-top: -90px; }
    55% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -270px; }
}

@keyframes flip3 {
    0% { margin-top: -270px; }
    5% { margin-top: -180px; }
    33% { margin-top: -180px; }
    38% { margin-top: -90px; }
    66% { margin-top: -90px; }
    71% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -270px; }
}

@keyframes flip4 {
    0% { margin-top: -360px; }
    5% { margin-top: -270px; }
    25% { margin-top: -270px; }
    30% { margin-top: -180px; }
    50% { margin-top: -180px; }
    55% { margin-top: -90px; }
    75% { margin-top: -90px; }
    80% { margin-top: 0px; }
    99.99% { margin-top: 0px; }
    100% { margin-top: -270px; }
}


</style>