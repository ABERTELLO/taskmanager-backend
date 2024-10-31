// Dependencies
import { Controller, Delete, Post, UseGuards } from '@nestjs/common';

// Common
import { JwtAuthGuard } from 'src/auth/config/jwt.guard';

// Resource
import { SeedService } from './seed.service';


@UseGuards(JwtAuthGuard)
@Controller('seed')
export class SeedController {
    constructor(private readonly seedService: SeedService) { }

    @Post()
    runSeed() {
        return this.seedService.runSeed();
    }

    @Delete()
    restartData() {
        return this.seedService.restartData();
    }

}
