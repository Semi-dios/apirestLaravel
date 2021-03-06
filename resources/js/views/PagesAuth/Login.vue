<template>
   <div class="container">
    <div class="row">
        <div class="col-sm-12">
            <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Incio de Sesion</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a :href="'/#/register'">Registro</a></li>
                            <li class="breadcrumb-item active">Inicio sesion</li>
                            </ol>
                        </div>
                        </div>
                    </div>
            </section>
            <section class="content">
            <div class="container-fluid">
                <div class="row">

                    <div class="col-md-12">

                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">Iniciar Sesión</h3>
                            </div>
                            <div class="card-body">
                                <form id="quickForm"  @submit.prevent="login(form)" @keydown="form.onKeydown($event)">
                                    <div class="card-body">

                                    <div class="form-group">
                                        <label for="email">Correo</label>
                                        <input type="email" name="email" class="form-control" id="email" v-model="form.email" placeholder="Enter email" :class="{ 'is-invalid': form.errors.has('email') }" required>
                                        <has-error :form="form" field="email"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Contraseña</label>
                                        <input type="password" name="password" class="form-control" v-model="form.password" id="password" placeholder="Password" :class="{ 'is-invalid': form.errors.has('password') }" required>
                                    <has-error :form="form" field="password"></has-error>
                                    </div>

                                    </div>

                                    <div class="card-footer">
                                    <button type="submit" class="btn btn-primary">Continuar</button>
                                    </div>
                                </form>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            </section>
           </div>
       </div>
   </div>


</template>

<script>
import { Form, HasError, AlertError } from 'vform'

export default {
    components:{
        Form,
       HasError,
      AlertError,
    },
    data() {
        return {
             form: new Form({
                    email: '',
                    password: '',
                })
        }
    },
    methods:{
         login (values) {

           axios.post('api/login',values)
                .then(({ data }) => { console.log(data) })
            }
    }
}
</script>

<style>

</style>
