<template>
 <div class="container">
     <div class="row justify-content-center">
         <div class="col-sm-12 col-lg-7">


            <div class="card card-success">
              <div class="card-header">
                <h3 class="card-title">Crear Articulo</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
             <form  @submit.prevent="onSubmit(form)" >
                <div class="card-body">

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
                  <div class="form-group">
                            <label for="created_at">Fecha Creacion</label>
                            <input type="datetime-local" name="created_at" id="created_at">
                            <ErrorMessage name="created_at" />
                    </div>

                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <a :href="'/#/dashboard'" type="button" class="btn btn-info">Regresar</a>
                  <button type="submit" class="btn btn-success" >Crear</button>
                </div>
              </form>
            </div>
            <!-- /.card -->
          </div>

     </div>
 </div>
</template>

<script>
export default {
    data() {
        return {
            form:{
                title: '',
                body: '',
                created_at: ''
            },
        }
    },
    methods: {

      onSubmit(values) {
            // Submit values to API...
           //alert(JSON.stringify(values, null, 2));
           this.createArticle(values);
          },
       isRequired(value) {
        if (value && value.trim()) {
            return true;
        }

        return 'Este campo es requrido';
        },
        createArticle(values){
             axios.post(`api/articles/`,values)
             .then((response) => {
                 this.$router.push({name: 'dashboard'});
             });;

        }

    },
    created(){

    }
}
</script>

<style>

</style>
