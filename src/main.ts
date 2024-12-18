// Dependencies
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// Common
import { AppModule } from './app.module';

const corsConfig = {
    credentials: true,
    origin: '*',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors(corsConfig);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            transformOptions: {
                enableImplicitConversion: true,
            },
        })
    );
    await app.listen(process.env.PORT);
}

bootstrap();
