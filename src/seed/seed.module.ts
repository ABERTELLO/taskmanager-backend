// Dependencies
import { Module } from '@nestjs/common';

// Common
import { NotesModule } from 'src/notes/notes.module';

// Resource
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';


@Module({
    controllers: [SeedController],
    imports: [NotesModule],
    providers: [SeedService],
})
export class SeedModule { }
