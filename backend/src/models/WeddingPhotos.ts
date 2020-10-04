import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('wedding')
class WeddingPhotos {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  weddingPhotos: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default WeddingPhotos;
