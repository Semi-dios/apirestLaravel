<?php

use Illuminate\Database\Seeder;
use App\Article;
class ArticlesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        //Borrar lo que tenemos y empezar de cero
        Article::truncate();
        $faker= \Faker\Factory::create();


        //Genera al azar 50 articulos
        for($i=0; $i< 50; $i++){
            Article::create([
                'title'=>$faker->sentence,
                'body'=>$faker->paragraph,
            ]);
        }
    }
}
