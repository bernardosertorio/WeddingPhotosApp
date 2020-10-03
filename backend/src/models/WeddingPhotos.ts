import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wedding')
class EntityWeddingPhotos {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  weddingPhotos: string;
}

export default EntityWeddingPhotos;
