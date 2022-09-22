import * as Jimp from 'jimp';
import fs from 'fs'
import minioConnection from '../constants/minioConnection';

export default class ImageProcessor {
    postImage(path: string,name: string): Promise<void> {
        return Jimp.read(path).then(file => {
          if(file.getWidth() < file.getHeight()){
            throw 'Unsupported size!'
          }
          file.resize(1000,Jimp.AUTO)
          file.writeAsync(path).then(() => {
            return minioConnection.fPutObject('img', `${name}.png`, `${path}`, {'Content-Type':'image/png'}, (err, etag) => {
              fs.unlink(path,(err) => console.log(err))
              if (err) throw 'Error on server, try again'
              })
            })
          }).finally(() => fs.unlink(path,(err) => console.log(err)))
    }
}