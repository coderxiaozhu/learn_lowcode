import { Inject, Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Repository } from 'typeorm';
import { Department } from './entities/department.mysql.entity';

@Injectable()
export class DepartmentService {
  constructor(
    @Inject('DEPARTMENT_REPOSITORY')
    private departmentRepository: Repository<Department>
  ) {}
  async create(createDepartmentDto: CreateDepartmentDto) {
    return this.departmentRepository.save(createDepartmentDto)
    // return 'This action adds a new department';
  }

  findAll() {
    return this.departmentRepository.find({ relations: ['users'] })
    // return `This action returns all department`;
  }

  findOne(id: number) {
    return this.departmentRepository.findOneBy({ id })
    // return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
