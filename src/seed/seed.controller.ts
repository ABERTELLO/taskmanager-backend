// Dependencies
import { Controller, Delete, Post } from '@nestjs/common';

// Resource
import { SeedService } from './seed.service';


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
