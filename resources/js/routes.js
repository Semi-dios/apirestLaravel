import Vue from 'vue';
import  VueRouter from  'vue-router';

const router = new VueRouter({
    history,
    routes:[
        {
            path: '/',
            name:'welcome',
            meta: { requiresAuth: true },
            component: require('./views/PagesAuth/Welcome.vue').default
        },
        {
            path: '/login',
            name:'login',

            component: require('./views/PagesAuth/Login.vue').default
        },
        {
            path: '/register',
            name:'register',

            component: require('./views/PagesAuth/register.vue').default
        },
        {
            path: '/dashboard',
            name:'dashboard',
            meta: { requiresAuth: true },
            component: require('./views/Dashboard.vue').default
        },
        {
            path: '/articles/edit/:id',
            name:'articles.edit',
            component: require('./views/Articles/EditArticle.vue').default
        },
        {
            path: '/articles/show/:id',
            name:'articles.show',
            meta: { requiresAuth: true },
            component: require('./views/Articles/ShowArticle.vue').default
        },
        {
            path: '/articles/create',
            name:'articles.create',
            meta: { requiresAuth: true },
            component: require('./views/Articles/CreateArticle.vue').default
        },


    ]
})




export default router;
