// Dependencies
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

// Common
import { EnvConfig } from './config/env.config';
import { AuthModule } from './auth/auth.module';
import { NotesModule } from './notes/notes.module';
import { SeedModule } from './seed/seed.module';
import { UsersModule } from './users/users.module';

// Resource
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
    imports: [
        ConfigModule.forRoot({
            load: [EnvConfig],
        }),
        MongooseModule.forRoot(process.env.MONGODB),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public')
        }),
        AuthModule,
        NotesModule,
        SeedModule,
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule { }
