<template>
      <div class="container">
       <div class="row">
           <div class="col-sm-12">
                <section class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1>Registro</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a :href="'/#/login'">Inicio sesion</a></li>
                                <li class="breadcrumb-item active">Registro</li>
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
                                <h3 class="card-title">Registro</h3>
                            </div>

                                <form id="quickForm" @submit.prevent="registerUser(form)" @keydown="form.onKeydown($event)">
                                        <div class="card-body">

                                            <div class="form-group">
                                                 <label for="name">Nombre</label>
                                                <input v-model="form.name" type="text" name="name"
                                                    placeholder="Name"
                                                    class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                                                <has-error :form="form" field="name"></has-error>
                                            </div>
                                            <div class="form-group">
                                                <label for="email">Correo</label>
                                                <input type="email" name="email" class="form-control" v-model="form.email" id="email" placeholder="Enter email" :class="{ 'is-invalid': form.errors.has('email') }" required>
                                                <has-error :form="form" field="email"></has-error>
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Contraseña</label>
                                                <input type="password" name="password" class="form-control" v-model="form.password" id="exampleInputPassword1" placeholder="Password" :class="{ 'is-invalid': form.errors.has('password') }" required>
                                                <has-error :form="form" field="password"></has-error>
                                            </div>
                                            <div class="form-group">
                                                <label for="password_confirmation">Conf. Contraseña</label>
                                                <input type="password" name="password_confirmation" class="form-control" v-model="form.password_confirmation" id="password_confirmation" placeholder="Password" :class="{ 'is-invalid': form.errors.has('password') }" required>
                                                <has-error :form="form" field="password_confirmation"></has-error>
                                            </div>



                                            <div class="card-footer">
                                            <button type="submit" class="btn btn-primary">Registrase</button>
                                            </div>
                                        </div>
                                </form>
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
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        })
        }
    },
    methods:{
         registerUser(values) {
            // Submit the form via a POST request
            axios.post('api/register',values)
            .then(({ data }) => { console.log(data) })
            }
    }

}
</script>

<style>

</style>
