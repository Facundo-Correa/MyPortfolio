<template>
    <div class="container">
        <div class="tabs">
            <div class="nav-tabs">
                <h1 class="h">Sobre Mi:</h1>
                <div class="nav-items m-1"  @click="setActive('tab-1')">
                    <button class="btn btn-info">Datos Personales</button>
                </div>
                <div class="nav-items m-1" @click="setActive('tab-2')">
                    <button class="btn btn-info">Ubicación</button>
                </div>
                <div class="nav-items m-1" @click="setActive('tab-3')">
                    <button class="btn btn-info">Contacto</button>
                </div>
            </div>
            <div class="tab-contenedor">
                <!-- class="tab-content" -->
                <div class="tab-pane" v-show="isActive('tab-1')">
                    <h3>Datos personales</h3>
                    <p>Nombres: Facundo Rodrigo</p>
                    <p>Apellido: Correa</p>
                    <p>DNI: 33442785</p>
                    <p>Fecha de nacimiento: 09/12/87</p>
                    <p>Años: 34</p>
                    <p>Hijos: Ninguno</p>
                    <p>Estado civil: Soltero</p>
                </div>
                <div class="tab-pane" v-show="isActive('tab-2')">
                    <h3>Ubicación</h3>
                    <p>País: Argentina</p>
                    <p>Provincia: Buenos Aires</p>
                    <p>Ciudad: General San Martin</p>
                    <p>Barrio: Billinghurst</p>
                    <p>Código postal: 1650</p>
                    <p>Dirección: Suipacha 6153</p>
                    <p>Dpto: 2</p>
                </div>
                <div class="tab-pane" v-show="isActive('tab-3')">
                    <h3>Contacto</h3>
                    <p>Teléfono: +549-11-25376931</p>
                    <p>Mail: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBpgSxpvRMmSvfJjWzTwVKTPNFqskrKgsZMHWdFqtGXqqxtcrfJZTkZQxbPrzKNRkxlVrxL" target="_blank">
                        ciscofacu@gmail.com
                    </a></p>
                    <p>Mail: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSGMTJLQLMBRCKjFSCkJfxNwSgxZJTcGdlBXwDjJKZxKdTKMfRBDtSFBBGkhtgNnjGkfkwXw" target="_blank">
                        correafacundorodrigo@gmail.com
                    </a></p>
                    <p>Facebook: <a href="https://www.facebook.com/CiscoCS" target="_blank">
                        Facu Cisco
                    </a></p>
                    <p>Instagram: <a href="https://www.instagram.com/facu.cisco/" target="_blank">
                        Facu Cisco
                    </a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/facundo-rodrigo-correa-3491851b4/" target="_blank">
                        Facundo Rodrigo Correa
                    </a></p>
                    <p>GitHub: <a href="https://github.com/Facundo-Correa" target="_blank">
                        Facundo Correa
                    </a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default{
    name: 'SobreMi',
    data : () => ({
        activeTab: 'tab-1'
    }),
    methods: {
        setActive(tab){
            this.activeTab = tab
        },
        isActive(tab){
            return this.activeTab === tab;
        }
    }
    
}
</script>

<style>
#SM{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    height: 90vh;
}
.h{
    color: white;
    margin-right: 1vh;
    }

.nav-tabs{
    display: flex;
    justify-content: center;
}

.tab-pane{
    color: white;
}

.tab-contenedor{
    width: 100%;
    height: 50%;
}
</style>
