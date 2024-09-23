import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { NotesModule } from 'src/notes/notes.module';

@Module({
  controllers: [SeedController],
  imports: [NotesModule],
  providers: [SeedService],
})
export class SeedModule {}
