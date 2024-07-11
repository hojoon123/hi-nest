import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return "이건 개쩌는 영화입니다.";
    }
    @Get("/:id")
    getOne(@Param('id') movieId: string){
        return `개쩌는 영화의 아이디는:${movieId}`;
    }
    @Post("/:id")
    create(@Param('id') movieId: string){
        return `개쩌는 영화 만들기 아이디는:${movieId}`;
    }
    @Delete("/:id")
    remove(@Param('id') movieId: string){
        return `개쩌는 영화 삭제 아이디:${movieId}`;
    }
    @Patch("/:id")
    path(@Param('id') movieId: string){
        return `개쩌는 영화 패치 아이디:${movieId}`;
    }

}
