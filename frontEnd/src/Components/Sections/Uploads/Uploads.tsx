import React from 'react';
import { Upload, Button, Spin } from 'antd';

export const Uploads = () => {
  return (
    <div className='w-[30%] py-2'>
        <Upload.Dragger
            // disabled
            multiple
            listType='picture'
            showUploadList= {{ showRemoveIcon: true, showDownloadIcon: true, showPreviewIcon: true }}
            accept='.png, .jpeg, .doc'
            beforeUpload={(file)=>{
                console.log(file);
                return false
            }}
            defaultFileList={[{
                uid: "abc",
                name: "existing_file.png",
                status: "uploading",
                percent: 50,
                url: "https://www.google.com/"
            }]}
            iconRender={()=>{
                return <Spin></Spin>
            }}
            // itemRender={(existingComp, file) => {
            //     return <p>{file?.name}</p>
            // }}
              progress={{
                  strokeWidth: 3,
                  strokeColor: {
                      "0%": "#f0f",
                      "100%": "#ff0"
                  },
                  style: { top: 12 }
            }}
        >
            Drag files here Or
            <br />
            <br />
            <Button>Click Upload</Button>
        </Upload.Dragger>
    </div>
  )
}
