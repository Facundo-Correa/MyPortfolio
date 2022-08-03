<template>
    <div class="container">
        <video src='@/assets/video/cubosnegros.mp4' id="video" muted autoplay loop></video>
        <div class="welcome">
            <h1>Bienvenidos a mi Curriculum Vitae Web Page</h1>
        </div>
        <div>
            <SobreMi  id="SobreMi" />
        </div>
        
    </div>
</template>

<script>
import SobreMi from './SobreMi.vue';
export default{
    name: "BodyC",
    components: { SobreMi }
}
</script>

<style>
#video{
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: -2;
}

.welcome{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    height: 100vh;
}
</style>