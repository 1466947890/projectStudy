import { ProForm, ProFormText } from '@ant-design/pro-components';

export default function () {
  return (
    <div className="Index">
      <div className="form_box">
        <div className="form_box_header">网站标题</div>
        <div className="form_box_content">
          <ProForm
            submitter={{
              resetButtonProps: {
                style: {
                  display: 'none',
                },
              },
              submitButtonProps: {
                style: {
                },
              },
            }}
          >
            <ProForm.Group>
              <ProFormText
                fieldProps={{
                  width: 'md',
                  required: true,
                }}
                placeholder={'用户名'}
              />
            </ProForm.Group>
            <ProForm.Group>
              <ProFormText.Password
                name="password"
                placeholder="用户密码"
                fieldProps={{
                  width: 'md',
                  required: true,
                }}
              />
            </ProForm.Group>
          </ProForm>
        </div>
        <div className="form_box_foot">版权信息</div>
      </div>
    </div>
  );
}
