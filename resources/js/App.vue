<template>
  <div >
<ModalDelete ></ModalDelete>
    <div class="wrapper">

        <Navbar></Navbar>
        <Sidebar/>
        <container class="fluid">
            <div class="row">
            <div class="col-sm-12">
                <div class="content-wrapper p-3">
                    <router-view></router-view>
                </div>
            </div>
            </div>
        </container>
    </div>

  </div>
 <!--  <div v-else>
        <router-view></router-view>

  </div> -->
</template>

<script>
import Sidebar from "../js/components/Sidebar"
import Navbar from "../js/components/Navbar"
import ModalDelete from '../js/views/Articles/_modalDelete'

import { Form, Field, ErrorMessage } from 'vee-validate';


export default {
    components:{
        Sidebar,
        Navbar,
        ModalDelete,
        Form,
        Field,
        ErrorMessage,


    },
    data(){
        return{

        }},
    methods:{

    }
}
</script>

<style>

</style>
