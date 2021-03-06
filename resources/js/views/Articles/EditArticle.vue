import { Field } from 'vee-validate';
<template>
 <div class="container">
     <div class="row justify-content-center">
         <div class="col-sm-12 col-lg-7">


            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Editar Articulo</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form  @submit.prevent="onSubmit(form)" >
                <div class="card-body">
                  <div class="form-group">
                    <label for="exampleInputName1">Nro Articulo</label>
                    <input type="text" class="form-control" id="exampleInputName1" v-model="form.id" disabled>
                </div>
                  <div class="form-group">
                            <label for="title">Nombre</label>
                            <input type="text" class="form-control" name="title" id="title" v-model="form.title" :rules="isRequired" required>
                            <ErrorMessage name="title" />
                  </div>
                  <div class="form-group">
                            <label for="body">Textarea</label>
                            <textarea class="form-control" id="body" name="body" rows="3" placeholder="Enter ..." v-model="form.body" :rules="isRequired" required></textarea>
                             <ErrorMessage name="body" />
                    </div>

                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <a :href="'/#/dashboard'" type="button" class="btn btn-info">Regresar</a>
                  <button type="submit" class="btn btn-primary" >Guardar</button>
                </div>
              </form>
            </div>

            <!-- /.card -->
          </div>

     </div>
 </div>
</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate'

export default {
    components: {
         Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            form:{ },
        }
    },
    methods: {
        loadArticle(){
            axios.get("api/articles/"+this.$route.params.id).then( data => (this.form = data.data));
            console.log(this.form);

        },
      onSubmit(values) {
            // Submit values to API...
           //alert(JSON.stringify(values, null, 2));
           this.uploadArticle(values);
          },
       isRequired(value) {
        if (value && value.trim()) {
            return true;
        }

        return 'Este campo es requrido';
        },
        uploadArticle(values){
             axios.put(`api/articles/${this.$route.params.id}`,values)
             .then((response) => {
                        this.$router.push({name: 'dashboard'});
                    });;

        }

    },
    created(){
        this.loadArticle();
    }
}
</script>

<style>

</style>
