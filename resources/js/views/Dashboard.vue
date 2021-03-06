<template>
    <div class="col-md-12 ">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Tabla de Articulos</h3>

                <div class="card-tools">
                  <ul class="pagination pagination-sm float-right">
                    <li class="page-item"><a class="page-link" href="#">«</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">»</a></li>
                  </ul>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body p-0">
                <table class="table">
                  <thead>
                    <tr>
                      <th style="width: 10px">Id</th>
                      <th>Nombre</th>
                      <th>Descripción</th>
                      <th style="width: 400px" class="text-right">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(article,index) of articles" :key="article">
                      <td>{{index}}</td>
                      <td>{{article.title}}</td>
                      <td>
                          {{article.body}}
                      </td>
                      <td>
                        <a class="btn btn-app mr-3 bg-success btn-sm" :href="'/#/articles/show/'+article.id">
                            <i class="fas fa-eye"></i>Ver
                        </a>
                        <a class="btn btn-app mr-3 bg-primary btn-sm" :href="'/#/articles/edit/'+article.id" >
                            <i class="fas fa-edit"></i> Edit
                        </a>
                        <a class="btn btn-app bg-danger btn-sm" data-id="article.id"   @click="deleteModalWindow(article.id)" data-toggle="modal" data-target="#modal-delete">
                            <i class="fas fa-trash"></i> Delete
                        </a>
                        </td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
</template>

<script>

export default {
       data() {
        return {
            articles: {}
        }
    },
    methods:{
         loadArticles() {
            axios.get("api/articles").then( data => (this.articles = data.data));
            console.log(this.articles)
            },
        deleteModalWindow(id){
             $('#modal-delete').modal('show');
             eventBus.$emit('deleteModalWindow', {item: id})
        }

    },
    created(){
        this.loadArticles();
    }
}
</script>

<style>

</style>
