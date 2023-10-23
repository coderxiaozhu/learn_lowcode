import { Module } from '@nestjs/common';
import { DatabaseModule } from 'y/comm/database/database.module';
import { DepartmentProviders } from './department.providers';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [DepartmentController],
  providers: [...DepartmentProviders, DepartmentService],
  exports: [DepartmentService]
})
export class DepartmentModule {}
