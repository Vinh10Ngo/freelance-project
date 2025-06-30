import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
@Injectable()
export class UploadService {
  AWS_S3_BUCKET = process.env.AWS_S3_BUCKET;
  s3 = new AWS.S3({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
  });
  async uploadFile(file: Express.Multer.File) {
    const { originalname } = file;
    console.log('AWS_S3_BUCKET: ', this.AWS_S3_BUCKET);

    return await this.s3_upload(
      file,
      this.AWS_S3_BUCKET!,
      originalname,
      file.mimetype,
    );
  }

  async s3_upload(
    file: Express.Multer.File,
    bucket: string,
    name: string,
    mimetype: string,
  ) {
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file.buffer,
      ACL: process.env.S3ACL,
      ContentType: mimetype,
      ContentDisposition: process.env.S3ContentDisposition,
      CreateBucketConfiguration: {
        LocationConstraint: process.env.S3LocationConstraint,
      },
    };

    try {
      const s3Response = await this.s3.upload(params).promise();
      return s3Response;
    } catch (e) {
      console.log(e);
    }
  }
}
