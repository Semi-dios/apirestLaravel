
<template>
 <div class="container">
     <div class="row justify-content-center">
         <div class="col-sm-12 col-lg-7">


            <div class="card card-success">
              <div class="card-header">
                <h3 class="card-title">Información de articulo</h3>
              </div>
              <div class="card-body ">
                <h4>{{info.id}}-{{info.title}}</h4>
                <br>
                <p>{{info.body}}</p>
                <span class="float-right">{{ info.updated_at| moment("dddd, MMMM Do YYYY") }}</span>

              </div>
                <div class="card-footer">
                  <a :href="'/#/dashboard'" type="button" class="btn btn-info">Regresar</a>

                </div>
              <!-- /.card-header -->
              <!-- form start -->
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
            info:{ },
        }
    },
    methods: {
        loadArticle(){
            axios.get("api/articles/"+this.$route.params.id).then( data => (this.info = data.data));
            console.log(this.info);}

        },

    created(){
        this.loadArticle();
    }
}
</script>

<style>

</style>

