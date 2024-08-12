import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/User';
import { UsersModule } from './users/users.module';
import { Profile } from './typeorm/entities/Profile';
import { Post } from './typeorm/entities/Post';
import { config } from 'dotenv';

config();
const db = {
  host: process.env.db_host,
  port: Number(process.env.db_port),
  username: process.env.db_username,
  password: process.env.db_password,
  database: process.env.db_name,
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: db.host,
      port: db.port,
      username: db.username,
      password: db.password,
      database: db.database,
      entities: [User, Profile, Post],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
