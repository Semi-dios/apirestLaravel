<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;


class ArticleController extends Controller
{
    public function index(){
        return Article::all();
    }


    public function show($id){
        $article = Article::findOrFail($id);
        return $article;
    }


    public function store(Request $request){
        $article= Article::create($request->all());
        return response()->json($article, 201);
    }

    public function update(Request $request,$id){
        $article = Article::findOrFail($id);
        $article->update($request->all());
        return response()->json($article, 200);

        return $article;
    }
    public  function delete( $id){
        $article = Article::findOrFail($id);
        $article->delete();
        return response()->json('Article deleted successfully', 204);

    }


}
