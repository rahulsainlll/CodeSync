import { S3 } from "aws-sdk";
import fs from "fs";

// replace with your own credentials
const s3 = new S3({
  accessKeyId: "ID",
  secretAccessKey: "SecretKey",
  endpoint: "Endpoint",
});

// fileName => output/12312/src/App.jsx
// filePath => /Users/rahulsain/CodeSync/dist/output/1212/src/App.jsx
export const uploadFile = async (fileName: string, localFilePath: string) => {
  const fileContent = fs.readFileSync(localFilePath);
  const response = await s3
    .upload({
      Body: fileContent,
      Bucket: "CodeSync",
      Key: fileName,
    })
    .promise();
  console.log(response);
};
